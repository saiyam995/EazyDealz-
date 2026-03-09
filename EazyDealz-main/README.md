# EazyDealz

EazyDealz is a simple and user-friendly e-commerce platform designed for users to browse, select, and purchase a variety of products. It features essential e-commerce functionalities such as product browsing, cart management, user login, and payment processing.

## Project Structure

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Libraries**: Bootstrap (optional), Font Awesome (for icons)

## Features

1. **Homepage (home.html)**: 
    - Displays featured products, new arrivals, newsletter signup, and contact information.
  
2. **Product Page (sproduct.html)**: 
    - Shows detailed product information with images, descriptions, and a "Buy Now" option.

3. **Shopping Cart (cart.html)**: 
    - Allows users to add or remove products from their shopping cart, update quantities, and view the total price.

4. **Login & Signup (login.html)**:
    - Users can register and log in with email and password, with secure password handling and a toggle visibility feature.

5. **Payment Page (payment.html)**: 
    - Users enter billing and payment information to complete their purchase.

6. **Responsive Design**:
    - The website is responsive and adapts to different screen sizes (desktop, tablet, and mobile).

## How to Run the Project

### Prerequisites

- **Node.js** and **npm** installed.
- **MongoDB** installed and running locally.

### Steps

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/eazydealz.git
    ```
    
2. Navigate to the project directory:
    ```bash
    cd eazydealz
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Start the MongoDB server:
    ```bash
    mongod
    ```

5. Run the Node.js server:
    ```bash
    node server/index.js
    ```

6. Open the browser and navigate to:
    ```
    http://localhost:3000
    ```

## Backend

The backend is built using **Node.js** and **Express.js**, and connects to a MongoDB database to store user information, product details, and order data.

- **MongoDB Connection String**:
    ```
    mongodb://localhost:27017/EazyDealz
    ```

## File Structure

```bash
eazydealz/
│
├── public/
│   ├── css/
│   │   ├── style.css        # Global styles
│   │   ├── cart.css         # Styles for cart.html
│   │   ├── payment.css      # Styles for payment.html
│   └── img/                 # Images used in the project
│
├── views/
│   ├── home.html            # Homepage
│   ├── login.html           # Login page
│   ├── cart.html            # Shopping cart page
│   ├── sproduct.html        # Single product page
│   ├── payment.html         # Payment page
│   └── success.html         # Success page after payment
│
├── server/
│   ├── index.js             # Main server file
│   ├── home.js              # Handles homepage logic
│   ├── app.js               # Express app and routing
│   └── cart.js              # Handles cart-related functionality
│
├── package.json             # npm package file
└── README.md                # Project readme
