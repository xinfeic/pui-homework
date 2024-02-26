const glazingSelect = document.getElementById('glazing');
const packSizeSelect = document.getElementById('pack-size');
const priceDisplay = document.getElementById('price');

let glazingPrice = 0; 
let packPrice = 1; 

// Glazing Options
const glazingOptions = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50
};

// Pack Size Options
const packSizeOptions = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
};

// Populate Glazing Options to the Detail page
if (glazingSelect) {
    for (let glazing in glazingOptions) {
        let option = document.createElement("option");
        option.value = glazingOptions[glazing];
        option.text = glazing;
        glazingSelect.appendChild(option);
    }
}

// Populate Pack Size Options to the Detail page
if (packSizeSelect) {
    for (let size in packSizeOptions) {
        let option = document.createElement("option");
        option.value = packSizeOptions[size];
        option.text = size;
        packSizeSelect.appendChild(option);
    }
}

// Cal Total Price When Glazing Size Change
function glazingChange() {
    glazingPrice = parseFloat(glazingSelect.value);
    calPrice();
}

// Cal Total Price When Pack Size Change
function packsizeChange() {
    packPrice = parseFloat(packSizeSelect.value);
    calPrice();
}

function calPrice(){
    let totalPrice = (basePrice + glazingPrice) * packPrice;
    priceDisplay.innerText = '$ ' + totalPrice.toFixed(2);
}
