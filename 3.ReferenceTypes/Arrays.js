//Arrays --> 0 index based
 

//CREATING Array

const shoppingCart = ['Oyster sauce', 'Chicken', 'Garlic']
console.log(shoppingCart);

const lotteryNumbers = [12, 34, 532, 67, 2]
console.log(lotteryNumbers);

const products = ["Apple", "Samsung", "Google", "Sony"]
console.log(products);

//ACCESSSING ITEMS/ELEMENTS FROM THE ARRAY

console.log(products[0]);
console.log(lotteryNumbers[3]);
console.log(shoppingCart[2]);

//Nested Array || Two Dimension
const nestedArr = [
    ["Apparel", ["Tops", "Shorts", "Pants", "Jeans", "Underwear"]],
    ["Gadgets", ["Portable Audio", "Wearable", "Mobiles"]]
]

console.log(nestedArr[0][1][1]);

//CHALLENGE ARRAY
const favSingers = ["NewJeans", "BTS", "Sigrid"]
console.log(favSingers[0]);

const favNumbers = [3, 1, 32, 4, 1]
const mixedArr = ["string", ["otherarray"], 123, true]

console.log(mixedArr[0]);
console.log(mixedArr[1]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);

