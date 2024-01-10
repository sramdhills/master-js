//BASIC ARRAY METHODS

const groceryList = [
    "apples",
    "pineapple",
    "chicken",
    "cookies"
]
//adding/removing elements in an array

groceryList.push("Banana") //push new element at the end of the array
console.log(groceryList);

groceryList.pop() //pop out the last element of the array
console.log(groceryList); 

groceryList.unshift("durian")// unshirt -add new element at the start of the array
console.log(groceryList);

groceryList.shift()//shift-remove the first element of the array
console.log(groceryList);

//concat
const hobbyCategory = ["Badminton", "Basketball", "Football", "Gym"]
const customCategory = ["Coding", "Reading", "Anime"]
const allCategories = hobbyCategory.concat(customCategory) //combine two or more arrays
console.log(allCategories);


const pl = ['javascript', 'python', 'php', 'java']
console.log(pl);
const number = [3, 3, 1, 5, 5]

console.log(pl.includes('javascript'));//true/false if it includes the specified string/number
// console.log(pl.join("-"));
// console.log(pl.reverse());

console.log(pl.slice(0, 2));

console.log(number);
console.log(number.sort());

