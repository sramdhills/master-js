//Destructuring allows us  to ""UNPACK" values from
//data-structures(arrays,objects) into separate distinct variables.

 const foo = ['1', '2','3']
 console.log(foo);

const [one, two, three, four] = foo //destructures the 'foo' array and assigns it to the 1,2,3 variables
console.log(one);
console.log(two);
console.log(three);
console.log(four); //no items stored in this variable

//Using default values in the variables array, with destructuring 
// let a, b
// [a = 5, b = 8, c , d, e] = [1,3,4,1]
// console.log(a,b,c,d,e);

//Destructure an Array from a function and assign to array of variables

function f () {
    return [1,2]
}

let a, b;
[a,b] = f() // stores values from array to the variables a,b

console.log(a,b);

//ignoring data from a function

function func() {
    return [1,2,3]

}
const [first, , third] = func()
//this ignores the 2nd value from the func()
console.log(first, third);

//Assigning the rest of an array to a variable

const [some, ...restoftheArray] = ["one", 'two', 'three', 'four', true]

console.log(some);
console.log(restoftheArray);

//CHALLENGE DESTRUCTURING

const colors = ['red', 'green', 'blue', 'yellow', 'orange']
const [color1, color2, ...color3] = colors

console.log(color1, color2, color3);

//Object Destructuring
//order does not matter, name does

// const student = {name: "Discipline", position: "first" }

// const {name, position} = student

// console.log(name, position);

 //CHALLENGE NUMBER 2
//  const person = {
//     name: "John Doe",
//     age: 30,
//     gender: "male",
//     country: "Philippies",
//  }

//  const {name, age, gender, country} = person

//  console.log(name);
//  console.log(age);
//  console.log(gender);
//  console.log(country);



 //RENAMING VARIABLES in OBJECT DESTRUCTURING

 const num = {x: 100, y: 200}
 const {x: newx, y: newy} = num

 console.log(newx);
 console.log(newy);

 //Object DESTRUCTURING and REST OPERATOR

 let{c,d, ...rest} = {c: 100, d:200, e:300, f:400}
 console.log(c);
console.log(d);
console.log(rest);


//CHALLENGE OBJECT DESTRUCTURING

const person = {
    name: "D Hills",
    age: 24,
    gender: "male",
    country: 'Norway',
}

const {name: personName, age: personAge, country: personCountry} = person
console.log(personName);
console.log(personAge);
console.log(personCountry);




