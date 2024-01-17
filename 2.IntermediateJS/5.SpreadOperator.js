//spread operator - takes an iterable and expands it into
//individual elements

//Functions, Array, Objects

function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "green", "blue", "indigo"];

//use spread operator to spread the array elements
//as arguments for the parameters

giveMe4(...colors);
//spreads an array to individual elements
//and passes as arguments to the function parameters.

//Array - spread operator
const strNums = ["one", "two", "three"];
const moreStrNums = ["four", "five", "six"];

const concatNums = [...strNums, ...moreStrNums];
console.log(concatNums);
//spreads elements of both arrays, into one variable array

let peoples = ["Discipline", "Ysheen", "Khatynet"];
const allPeeps = ["Mary", ...peoples, "John"];
console.log(allPeeps);

//Objects - spread operator
const obj1 = {
  x: 1,
  y: 2,
};

const obj2 = {
  z: 3,
};

const concatObj = {
  ...obj1,
  ...obj2,
};
console.log(concatObj);
//

let person = {
  name: "Discipline",
  age: 24,
  gender: "Masculine",
};

let clone = { ...person, work: "ProWebDev" };
clone.sex = "Male";
console.log(clone);

person.location = "idk";

console.log(person);

//CHALLENGE SPREAD OPERATOR

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

const cloneArr1 = [...arr1];
const cloneArr2 = [...arr2];
const concatClone = [...arr1, ...arr2];
console.log(concatClone);

//2nd Challenge
const user = {
  name: "Jen",
  age: 22,
};
const cloneUser = { ...user };
console.log(cloneUser);

//3rd Challenge

function product(x, y) {
  return x * y;
}

const givenNum = [2, 3];
const result = product(...givenNum);
console.log(result);

//4th Challenge
function getBMI(weight, height) {
  return weight / (height * height);
}

const userInput = [54, 1.61544];
const bmiResult = getBMI(...userInput);
console.log(bmiResult);

if (bmiResult <= 18.4) {
  console.log("Status: Underweight");
} else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
  console.log("Status: Normal");
} else if (bmiResult <= 25.0 && bmiResult <= 39.9) {
  console.log("Status: Overweight");
} else {
  console.log("Status: Obese");
}
