//map() creates a new array populated  with the results of calling aprovided function on every element in the calling array

let numbers  = [1, 3, 4, 5, 2, 5]

let double = numbers.map(num => num * 2)
console.log(double);

//difference between forEach and map
//map method modifies an array and returns into a new variable array
//forEach performs function on each element, but doesn't return anything

let peoples = [
    {firstName: "Sram D Hills", lastName: "Santillan"},
    {firstName: "Ysheen", lastName: "Laguna"},
]

const results = peoples.map(person => {
    return [person.firstName, person.lastName]
})

console.log(results);

//Challenge ARray Map Method

let randomNum = [2, 3, 4, 6, 7, 1, 3]
    const product = randomNum.map(num => num * 10)
    console.log(product);


//using forEach
let allProduct = 1
 function multiplyFunct(num) { //the parameter is the elements of the array
    allProduct *= num
 }
 randomNum.forEach(multiplyFunct)
 console.log(allProduct)