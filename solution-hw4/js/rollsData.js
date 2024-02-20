const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

let cart = [];

// Get Roll Type
const queryString = window.location.search; 
const params = new URLSearchParams(queryString);
var rollType = params.get('roll')|| 'Original';; 

// Update Roll Name
const titleElement = document.querySelector('.title-line-detail p');
if (titleElement) {
    titleElement.textContent = `${rollType} Cinnamon Roll`;
}

// Update Roll Base Price
const basePrice = rolls[rollType].basePrice;
const priceElement = document.getElementById('price');
if (priceElement) {
    priceElement.innerText = `$ ${basePrice.toFixed(2)}`;
}

// Update Roll Image
const imageName = rolls[rollType].imageFile; 
const imagePath = `../assets/products/${imageName}`;
const imageElement = document.querySelector('.product-image-customization');
if (imageElement) {
    imageElement.src = imagePath;
    imageElement.alt = `${rollType} cinnamon roll`; 
}

// Class Roll
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// Add New Roll to Cart
document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
    const rollType = params.get('roll'); 
    const glazing = glazingSelect.value;
    const packSize = packSizeSelect.value;
    const basePrice = rolls[rollType].basePrice;

    const newRoll = new Roll(rollType, glazing, packSize, basePrice);

    cart.push(newRoll);
    console.log(cart);
});