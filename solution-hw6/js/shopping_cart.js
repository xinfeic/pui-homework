const totalPriceElements = document.querySelectorAll('.total-price');
const totalPriceDisplay = totalPriceElements[1];
let totalPrice_Cart = 0

document.addEventListener('DOMContentLoaded', function() {
    loadCartFromLocalStorage(); 
    cart.forEach(roll => createElement(roll));
    calculateTotalPrice()
});

// Calculate total price for one roll
function calPrice(basePrice, glazingChoice, packSize){
    let totalPrice = (basePrice + glazingOptions[glazingChoice]) * packSizeOptions[packSize];
    return (totalPrice);
}

// Calculate total price for all rolls
function calculateTotalPrice() {
    totalPrice_Cart = 0; 
    cart.forEach(roll => {
        totalPrice_Cart += calPrice(roll.basePrice, roll.glazing, roll.size);
    });
    totalPriceDisplay.innerText = `$ ${totalPrice_Cart.toFixed(2)}`;
}

// Add a Roll to the cart
function addRoll(rollType, rollGlazing, packSize, basePrice){
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    totalPrice_Cart += (basePrice + glazingOptions[rollGlazing])*packSizeOptions[packSize];
    cart.unshift(roll);
    calculateTotalPrice();
    badgeIconIncrease();
}

// Delete selected Roll from the cart
function deleteRoll(roll) {
    totalPrice_Cart -= calPrice(roll.basePrice, roll.glazing, roll.size)
    roll.element.remove();
    cart = cart.filter(item => item !== roll);
    saveCartToLocalStorage();
    calculateTotalPrice();
    badgeIconDecrease();
    console.log('Cart:', JSON.parse(localStorage.getItem('cart')));
}

// Create an Element on shopping_cart.html
function createElement(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    
    roll.element = clone.querySelector('.cart-item');
    
    const btnRemove = roll.element.querySelector('.remove');
    btnRemove.addEventListener('click', () => {
        deleteRoll(roll);
    });

    const cartElement = document.querySelector('#roll-list');
    cartElement.prepend(roll.element);
    updateElement(roll);
}

// Update DOM for one roll
function updateElement(roll) {

    // Get HTML element
    const rollImageElement = roll.element.querySelector('.product-image-cart');
    const rollTypeElement = roll.element.querySelector('.roll-type');
    const glazingElement = roll.element.querySelector('.glazing');
    const packSizeElement = roll.element.querySelector('.pack-size');
    const priceElement = roll.element.querySelector('.price');

    // Display roll name
    const rollType = roll.type
    rollTypeElement.innerText = `${rollType} Cinnamon Roll`;

    // Display roll image
    const imageName = rolls[rollType].imageFile; 
    const imagePath = `../assets/products/${imageName}`;
    rollImageElement.src = imagePath;
    rollImageElement.alt = `${rollType} cinnamon roll`; 

    // Display roll glazing & packSize
    glazingElement.innerText = `Glazing: ${roll.glazing}`;
    packSizeElement.innerText = `Pack Size: ${roll.size}`;

    // Display total price for one type of roll
    const totalForOne = calPrice(roll.basePrice, roll.glazing, roll.size)
    priceElement.innerText = `$ ${totalForOne.toFixed(2)}`;

}

// Iterate over each rolls in the cart
for (const roll of cart) {
    createElement(roll);
}

calculateTotalPrice();
