//find() method is another built-in arrayhelper in javascript
//that allows you to find the first element in an array that matches
//a specific condition. It returns the value of the first element that satisfies
//the given testing function

const peoples = [
    {name: "Discipline", age: 12},
    {name: "john", age: 14},
    {name: "alex", age: 16},
    {name: "john", age: 53},
]

const res = peoples.find((person) => person.name === "john") //returns the object that meets the condition

console.log(res);


const posts = [
    {id: 1, content: "Good post"},
    {id: 1, content: "Funny post"},
    {id: 1, content: "Sad post"},
    {id: 1, content: "Post Malone"},
]

const postRes = posts.find(post => post.content === "Funny Post")
console.log(postRes);


//CHALLENGE find()method


const ages = [2, 4, 5, 6, 14, 52, 623, 221]

function ageCheck(age) {
    return age >= 18
}

const ageCheckResult = ages.find(ageCheck)
console.log(ageCheckResult);


//BONUS Challenge find method

let products = [
    {name: "Checkers", category: "Toys"},
    {name: "Harry Potter", category: "Books"},
    {name: "iPhone", category: "Electronics"},
    {name: "Learn Javascript", category: "Books"},
]

function findItem(items) {
    return items.category === "Books"
}

const foundItem = products.find(findItem) //can also use filter() method
console.log(foundItem);
