// ------------------------------------
// createElement()
const h1 = document.createElement("h1")
const body = document.body
console.log(h1);
h1.textContent = "Goodbye"
console.log(h1.textContent);
h1.classList.add("greetings")
// appendChild()
body.appendChild(h1)
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

const ul = document.querySelector("ul")
const newLi = document.createElement("li")
newLi.innerText = "Li tag"

ul.appendChild(newLi)

const firstLi = document.querySelector("li")
ul.insertBefore(newLi, firstLi)

const firstP = document.querySelector("p")
const i = document.createElement("i")
i.innerText = "italics"
i.style.color = "blue"
firstP.insertAdjacentElement("beforebegin", i)
firstP.insertAdjacentElement("afterbegin", i)
firstP.insertAdjacentElement("beforeend", i)
firstP.insertAdjacentElement("afterend", i)


let section = document.querySelector("section")
const i2 = document.createElement("i")
i2.innerText = "Hei"
i2.style.color = "skyblue"
const span = document.createElement("span")
span.innerText = "Default to Coding"
span.style.color = "orange"

section.append(i2, span)
section.prepend(i2, span)


const  newList = document.querySelector(".new-list")
const fourth = document.querySelector(".fourth")
newList.removeChild(fourth)
newList.remove()