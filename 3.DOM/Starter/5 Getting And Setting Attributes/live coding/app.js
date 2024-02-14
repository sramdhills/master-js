// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a")
const input = document.querySelector("input")
console.log(a.href);
console.log(input.value);
console.log(input.type);

a.href = "https://www.youtube.com"
// input.value = "bye"
input.type = "text"
input.placeholder = "Please provide a password"

//getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

//setAttribute(attrName, value)
console.log(input.setAttribute("placeholder", "Email"));
console.log(input.setAttribute("type","password"));

//CHALLENGE 
