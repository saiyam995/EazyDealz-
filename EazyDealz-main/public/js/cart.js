// Add product to cart
function addToCart() {
    let productImage = document.querySelector(".single-pro-image img").src;
    let productName = document.querySelector(".single-pro-details h4").textContent;
    let productPrice = parseFloat(document.querySelector(".single-pro-details h2").textContent.replace('₹', '')); // Remove '₹'
    let productQuantity = parseInt(document.querySelector(".single-pro-details input[type='number']").value);

    let product = {
        image: productImage,
        name: productName,
        price: productPrice,
        quantity: productQuantity
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}

// Load cart items on cart.html
function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTable = document.getElementById('cart-items');
    let total = 0;

    // Clear previous cart table rows
    cartTable.innerHTML = '';

    cartItems.forEach((item, index) => {
        const subtotal = item.price * item.quantity; // Calculate subtotal for each item
        total += subtotal; // Add to total

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
            <td><img src="${item.image}" width="100px"></td>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" max="5" 
                onchange="updateQuantity(${index}, this.value)">
            </td>
        `;
        cartTable.appendChild(row);
    });

    // Update total price and final price
    document.getElementById('total-price').innerText = `₹${total}`;
    document.getElementById('final-price').innerText = `₹${total}`;
}

// Remove item from cart
function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1); // Remove the item at the given index
    localStorage.setItem('cart', JSON.stringify(cartItems));
    loadCart(); // Reload cart after removing the item
}
function applyCoupon() {
    const couponCode = document.querySelector('input[type="text"]').value.trim();
    const validCoupons = ["DISCOUNT2024", "PRATIK172", "KEYUR167", "JANAK170", "SAIYAM200"]; // Array of valid coupon codes

    if (validCoupons.includes(couponCode)) {
        const discountPercentage = Math.floor(Math.random() * (50 - 30 + 1)) + 30; // Generate a random discount between 30% and 50%
        let total = parseFloat(document.getElementById('total-price').innerText.replace('₹', '')); // Get current total price
        const discountAmount = (total * discountPercentage) / 100; // Calculate discount amount
        const discountedTotal = total - discountAmount;

        // Update the final total after applying the discount
        document.getElementById('total-price').innerText = `₹${total.toFixed(2)}`;
        document.getElementById('final-price').innerText = `₹${discountedTotal.toFixed(2)}`;

        alert(`Coupon applied! You got a ${discountPercentage}% discount.`);
    } else {
        alert("Invalid coupon code. Please try again.");
    }
}
function redirectToPayment() {
    window.location.href = 'payment.html'; // Redirects to payment.html
}

// Update product quantity in the cart and recalculate totals
function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity = parseInt(quantity); // Update quantity
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Reload cart to reflect updated quantity and subtotal
}

// Load cart when page loads
document.addEventListener('DOMContentLoaded', loadCart);
