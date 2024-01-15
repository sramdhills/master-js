//Template strings - template literals.
// strings with embedded expressions.
// `` uses backticks

console.log(`This is some
random text`);

//expressions inside the template literals
console.log(`${2 + 2}`);

const firstName = "Discipline"
const lastName = "Coding"

console.log(`My name is: ${firstName} ${lastName}`);

console.log(`${ ['one', 'two', 'three'] }`);


//render a js expressions, arrays, variables. in template literals.

function info() {
    return `My name is D for Discipline & I am 24 years old`
}

console.log(info());
console.log(`${info()}`);

//use template literals 

//CHALLENGE TEMPLATE LITERALS

console.log(`The quick
brown fox
jumps over
the lazy dog`);


const growth = "Determination"
const mindset = "is in my Root"

console.log(`My quote for today is "${growth} ${mindset}"`);