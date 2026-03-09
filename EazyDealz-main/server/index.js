const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Assuming your HTML files are in a 'public' folder

// MongoDB connection
const dbURI = 'mongodb://localhost:27017/EazyDealz';

async function connectDB() {
    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Could not connect to database:', error.message);
    }
}

connectDB();

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/signup', async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
        return res.status(400).send('<script>alert("Passwords do not match"); window.location.href = "/signup.html";</script>');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.redirect('/login.html'); // Redirect to login page after successful signup
    } catch (error) {
        res.status(500).send('<script>alert("Error creating user"); window.location.href = "/signup.html";</script>');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('<script>alert("User not found"); window.location.href = "/login.html";</script>');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('<script>alert("Invalid credentials"); window.location.href = "/login.html";</script>');
        }

        res.redirect('/home.html'); // Redirect to home page after successful login
    } catch (error) {
        res.status(500).send('<script>alert("Error logging in") window.location.href = "/login.html";</script>');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});