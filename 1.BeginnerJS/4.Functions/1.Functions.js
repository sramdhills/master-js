//Function - a block of code that performs a specific task.
// - a heart of javascript
// - reusable
// work with DRY - Do not Repeat Yourself

//function name(parametersIfAny) {...}

//Function declaration
// function greet() {
//     console.log("Hellofrom a function");
// }

//call, run, execute the function
// greet()
// greet()
// greet()

function sayHello(name) {
    console.log(`Hello ${name}`);
}
sayHello("D for Discipline")
sayHello("Determinations is Me")



//return --> function

function add(x, y) {
    return x + y
}
const res = add(10, 20)

console.log(res);

//CHALLENGE FUNCTION

function myFunction(x, y) {
    return x * y
}

let product = myFunction(3, 8)
console.log(product);

//Function Declaration - can call before initialization of the function
function sayHi(userName) {
    console.log(`Hi ${userName}`);
}

sayHi("DHills")

//Function Expression - store the function in a variable
// cannot call before the function initialization
const greetings = function (user) {
    console.log(`Hi ${user}`);
}

greetings("Sram")


//CALLBACK FUNCTION
//when we provide function as an (argument) to other function
//that function is known as callback function

// function showCallFunc(fn) {
//     const value = 10
//     fn(value)
// }

// showCallFunc(function(value) {
//     console.log(value);
// })

// // //anothter callback function

function greet(name, cb)  {
    console.log(`Hello ${name}`);
    cb()
}

function cb() {
    console.log("I am a callback function");
}

greet("Dee", cb)

//CHALLENGE CALLBACK FUNCTION

function showCallFunc(fn){
    const value = 10
    fn(value)
}

showCallFunc(function(value){
    console.log(value);
})
