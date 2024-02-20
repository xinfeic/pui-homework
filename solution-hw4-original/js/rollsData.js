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

// Redirect to product_detail_page.html?roll=rollType
function redirectToDetailPage(rollType) {
    if(rolls[rollType]) { 
        const url = `product_detail_page.html?roll=${encodeURIComponent(rollType)}`;
        window.location.href = url; 
    } else {
        console.error('Roll type does not exist:', rollType);
    }
}

// Get Roll Type
const queryString = window.location.search; 
const params = new URLSearchParams(queryString);
var rollType = params.get('roll')|| 'Original';; 

// Title Line
const titleElement = document.querySelector('.title-line-detail p');
if (titleElement) {
    titleElement.textContent = `${rollType} Cinnamon Roll`;
}

// Image
console.log('rollType:', rollType);
const imageName = rolls[rollType].imageFile; 
const imagePath = `../assets/products/${imageName}`;
const imageElement = document.querySelector('.product-image-customization');
if (imageElement) {
    imageElement.src = imagePath;
    imageElement.alt = `${rollType} cinnamon roll`; 
}
