//Enhanced Object Literals - concised Object defining

function user(name, age, work) {
    return {
        name,
        age,
        work,
        intro(){
            return `My name is ${name}, ${age}, a ${work}`
        }
    }
}

const dhills = user("D Hills", 23, "WebDev")
console.log(dhills.intro());

//CHALLENGE Enhanced Object Literals

// const a = 1 
// const b = 2 
// const c = 3

// const obj = {
//     a,
//     b,
//     c,
// }
// console.log(obj);

//2nd CHALLENGE
const lib = {
    sum:(a, b) => a + b,
    multiply:(a, b) => a * b,

}
console.log(lib.sum(2, 3));
console.log(lib.multiply(2, 3));

//3rd CHALLENGE

function getPersionES6 (name, age, height) {
    return {
        name, 
        age, 
        height
    }
}
console.log(getPersionES6("DFUn", 24, 164))

//LEARNINGS
 // use ArrowFunctions only for one liner
 //user ES6 Enhanced Object Literals for making functions and ibjects