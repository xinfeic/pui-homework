const glazingSelect = document.getElementById('glazing');
const packSizeSelect = document.getElementById('pack-size');
const priceDisplay = document.getElementById('price');

const basePrice = rolls[rollType].basePrice;
let glazingPrice = 0; 
let packPrice = 1; 

function glazingChange() {

    switch(glazingSelect.value) {
        case 'Keep original':
            glazingPrice = 0;
            break;
        case 'Sugar milk':
            glazingPrice = 0;
            break;
        case 'Vanilla milk':
            glazingPrice = 0.50;
            break;
        case 'Double chocolate':
            glazingPrice = 1.50;
            break;
    }

    calPrice();
}

function packsizeChange() {

    switch(packSizeSelect.value) {
        case '1':
            packPrice = 1;
            break;
        case '3':
            packPrice = 3;
            break;
        case '6':
            packPrice = 5; 
            break;
        case '12':
            packPrice = 10;
            break;
    }

    calPrice();
}

function calPrice(){
    let totalPrice = (basePrice + glazingPrice) * packPrice;
    priceDisplay.innerText = '$ ' + totalPrice.toFixed(2);
}

calPrice()

// Add to Cart
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let cart = [];

document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
    const rollType = params.get('roll'); 
    const glazing = glazingSelect.value;
    const packSize = packSizeSelect.value;
    const basePrice = rolls[rollType].basePrice;

    const newRoll = new Roll(rollType, glazing, packSize, basePrice);

    cart.push(newRoll);
    console.log(cart);
});
