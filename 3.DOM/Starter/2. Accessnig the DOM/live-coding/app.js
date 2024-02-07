// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByTagName("h1").length)

// 2. getElementById
console.log(document.getElementById("id-1"))

// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls-1"))

// 4. querySelector(allows u to select anything by using css selector)
console.log(document.querySelector("#id-1")) // "" for Tag name. "." for class, "#" ID Selector
//I Love query Selector BUT, it can only select 1. :< 

// 5. querySelectorAll - that's why I'm here // nodelist
console.log(document.querySelectorAll(".cls"))
console.log(document.querySelectorAll("li").length)
// ---------------------------------------

// Storing data in variables
const header = document.querySelectorAll("h1")
console.log(header);


