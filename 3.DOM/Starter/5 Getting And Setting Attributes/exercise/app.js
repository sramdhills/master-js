// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)


const anchor = document.querySelector("a")
console.log(anchor);

console.log(anchor.getAttribute("href"));

const aTwo =  document.querySelector(".a-two")
console.log(aTwo.setAttribute("href", "https://www.facebook.com"));
console.log(aTwo);

