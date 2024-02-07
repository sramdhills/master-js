//Set is a built-in data structure introduced in ES6 that represents a collention
//of UNIQUE VALUES. Unlike arrats, Set allows you to stoe only unique values.
//which means duplicate values are automatically removed. Each value can occur ONCE


//Set objects are useful when you need to store a list of unique elements and quickly 
//check for the existence of a specific value.

const mySet = new Set()

mySet.add("apple")
mySet.add("banan")
mySet.add("apple")
// console.log(mySet.has("banan")); //has method  checks if mySet has "banan"
// console.log(mySet);

// //delete property in set

// mySet.delete('banan')
// mySet.clear() // clears set || empty set
// console.log(mySet); // Set(1) ['apple']


for (let item of mySet) {
    console.log(item);
}


//CHALLENGE SET



const letters = new Set()

letters.add("a")
letters.add("b")
letters.add("c")


for (let letter of letters) {
    console.log(letter);
}


//PERSONAL CHALLENGE - display the values without repetition.

const NumberSet = [1, 2, 3, 2, 3, 21, 3, 21]

const SetNumbers = new Set(NumberSet)
console.log(SetNumbers);

for (let numbers of SetNumbers) {
    console.log(numbers);
}
