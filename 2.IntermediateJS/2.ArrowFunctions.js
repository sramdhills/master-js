//ARROW FUNCTIONS
//allows concise and shorter way to define functions


// function greet(username) {
//     return `Hello ${username}`
// }

// console.log(greet("DHills"));

greet = (username) => `Hello ${username}`


console.log(greet("DHills"));

functionName = (num) => {
    return num-2
}

console.log(functionName(3));

//practicing writing arrow functions

funcArrow = (params) => {
    return `That ${params}`
}

console.log(funcArrow("year "));

//shorter
const meet = year => `That ${year}` //function arrow expression

console.log(meet(2024));