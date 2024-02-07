//Symbol is a unique  and immutable primitive data type introduced in ES6 . 
//A Symbol is often used as an identifier for object properties to avoid potential conflicts.

//Symbols are guaranteed to be unique.

const mySymbol = Symbol("My symbol")
console.log(mySymbol);

//cOmparing symbols

const mySymbol1 = Symbol("name")
const mySymbol2 = Symbol("name")
console.log(mySymbol1 === mySymbol2);

const obj = {}
obj[mySymbol1]  = "Value 1"
obj[mySymbol2]  = "Value 2"
console.log(obj);

//CHALLENGE  symbol

const challengeSymbol = Symbol()
console.log(typeof challengeSymbol);

const emptyObj = {
    firstName: "d hills",
    lastName: "santillan"
}
emptyObj[Symbol('foo')] = "some value"
console.log(emptyObj);

for (let i in emptyObj) {
    console.log(i);
}
