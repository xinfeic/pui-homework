// Initialize / retrieve cart
let cart = []; 

function loadCartFromLocalStorage() {
    const cartJSON = localStorage.getItem('cart');
    if (cartJSON !== null) {
        cart = JSON.parse(cartJSON);
    } else {
        cart = [];
    }
    calculateInitialCartCount(); 
}

// Initialize cart count display
function calculateInitialCartCount() {
    cartCount = cart.reduce((count, item) => count + (item.quantity || 1), 0);
    updateCartCountDisplay(); 
}

// load cart & roll count display
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromLocalStorage(); 
    calculateInitialCartCount();
});

// Helper function to update the cart count display
function updateCartCountDisplay() {
    document.querySelector('.notification-bubble').textContent = cartCount;
}

// Update cart count display (add roll)
function badgeIconIncrease() {
    cartCount++;
    updateCartCountDisplay();
}

// Update cart count display (delete roll)
function badgeIconDecrease() {
    if (cartCount > 0) {
        cartCount--;
    updateCartCountDisplay();
    }
}