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



//FUNCTION DESTRUCTURING in JS

const people = {
    name: "Function Destructuring",
    age: 24,
    country: "Norway"
}
function printPersonInfo({name, age, country}) { //Function Destructuring
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
}

printPersonInfo(people)

//another example of function destructuring

let options = {
    title: 'Dessert',
    items: ['Leche flan', 'Fresh Lumpia'],
}

function showMenu({title, items}) {
    console.log(`${title}`);
    console.log(items);
}

showMenu(options)


//Nested Destructuring in JS
const songs = [
    {songname: "Best Friend", singer: "County Rex Orange", Duration: 3.23 },
    {songname: "Humble", singer: "Kendrick Lamar", Duration: 2.32},
    {songname: "Woman Like Me", singer: "Little Mix", Duration: 4.21},
]

const [,{songname}] = songs
console.log(songname);

//Destructuring Mixture

const data = {
    user: {
      id: 123,
      name: "Discipline",
      age: 24,
      email: "sramdhills@gmail.com",
      address: {
        city: "Bergen",
        country: "Norway",
      },
      hobbies: ["Reading", "Painting", "Cooking", "Programming"],
      scores: {
        math: 95,
        science: 88,
        history: 75,
      },
    },

    products: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 800 },
      { id: 3, name: "Tablet", price: 500 },
    ],
    
    settings: {
      darkMode: true,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      language: "English",
    },
  };
  
  //Extracting data using Object Destructuring

const {
    user: {
        name,age, address : {city, country},
        hobbies,
        scores: {math, science, history},
        email,
    },
    products: [product1, product2, product3],
    settings: {
        darkMode,
        notifications: {
            email: emailNotifications,
            sms: smsNotifications,
            push: pushNotifications,
        },
        language,
    },
} = data

// Logging the extracted data using template literals
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${product1.name} - $${product1.price}`);
console.log(`Product 2: ${product2.name} - $${product2.price}`);
console.log(`Product 3: ${product3.name} - $${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notifications: ${emailNotifications}`);
console.log(`SMS Notifications: ${smsNotifications}`);
console.log(`Push Notifications: ${pushNotifications}`);
console.log(`Language: ${language}`);