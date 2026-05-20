// ========================
// Bread-Bean Cart System
// ========================

let cart = [];
let total = 0;

// Add products to cart
function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    total += price;

    displayCart();

    alert(productName + " added to cart!");
}

// Display cart items
function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        let li = document.createElement("li");

        li.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );

        li.innerHTML = `
            ${item.name} - P${item.price}

            <button class="btn btn-sm btn-danger"
                onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
}

// Remove product
function removeItem(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    displayCart();
}

// Checkout function
function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

    } else {

        alert(
            "Order placed successfully!\\n" +
            "Total Amount: P" + total +
            "\\nThank you for shopping at Bread-Bean Bakery!"
        );

        cart = [];
        total = 0;

        displayCart();
    }
}

// Console message
console.log("Bread-Bean Bakery Website Loaded");
