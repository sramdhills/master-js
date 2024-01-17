// a method is a function that is associated with an object. 
//It allows objects to perform actions or provide functionalities.


// function greet() { //creating a method
//     return `hello, my name is ${person.name}, and I am ${person.age}`
// }

// const person = {
//     name: "Discipline",
//     age: 23,
//     greet, //passing the reference of the method in object,js
// }

// console.log(person.greet());

//real method 

const person = {
    name: "Dhills",
    age: 23,
    greet(){
        return `Hello, my name is ${person.name}, and I am ${person.age} years old`
    }
}

console.log(person.greet());