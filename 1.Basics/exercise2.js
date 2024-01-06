//CHALLENGE 1
// let firstFavNum = 9;
// let secondFavNum = 3;
// console.log(firstFavNum + secondFavNum);
// console.log(firstFavNum - secondFavNum);
// console.log(firstFavNum * secondFavNum);
// console.log(firstFavNum / secondFavNum);
// console.log(firstFavNum % secondFavNum);
// console.log(firstFavNum ** secondFavNum);

//BOOLEAN-> true // false

// let isTrue = NaN;
// let number = 10;

// console.log(number + undefined);

//truty
//falsy
//-false
//-null
//undefined
// 0
// -0
//Nan
// '', "", empty quotes

// CHALLENGE 2

// let isJsProgrammingLanguage = true;
// let isJsHard = false;
// let favNumb = 9;

// console.log(isJsProgrammingLanguage);
// console.log(isJsHard);
// console.log(favNumb + undefined);

// Comparison Operators
// - Relational Operator
// > Greater than
// < Lesser than
// >= Greater and Equal than
// <= Lesser and Equal than
console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);
// - Equality Operators

console.log(10 == 10);
console.log(10 != 10);
console.log(10 == '10');

// CHALLENGE Comparison Operators and Equality Operators
// let firstFaveNumb  = 9
// let secondFavNumb  = 3

// console.log(firstFaveNumb > secondFavNumb);
// console.log(firstFaveNumb < secondFavNumb);
// console.log(firstFaveNumb >= secondFavNumb);
// console.log(firstFaveNumb <= secondFavNumb);

// console.log(firstFaveNumb === secondFavNumb);
// console.log(firstFaveNumb == secondFavNumb);
// console.log(firstFaveNumb !== secondFavNumb);
// console.log(firstFaveNumb != secondFavNumb);

//Strings
let firstName = "          D Hills         "
let secondName  = 'Determination'
let fullName1 = firstName + ' ' + secondName //string concatenation

console.log(fullName1);

// 1. Concatenation
let fullName = firstName.concat(secondName) //concat method

console.log(fullName);

// 2. Append

firstName += " something else"
console.log(firstName);

// 3. Length
console.log(firstName.length);

// 4. Cases
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// 5. Slice - returns section
console.log(firstName.slice(1,3));

// 6. Split & Join
console.log(firstName.split(' ').join(' '));

// 7. Includes
console.log(firstName.includes("h"));

// 8. Trim 
console.log(firstName.trim());

let descFirstName = "Discpline"
let descLastName = "Santillan"

let fullName3 = `${descFirstName} ${descLastName} something`

console.log(fullName3);


//CHALLENGE STRING METHODS

let favActorFirstName = 'Leo '
let favActorLastName = 'DiCaprio'
let fullNameActor = favActorFirstName.concat(favActorLastName)
let uppercase = fullNameActor.toUpperCase()
let message = `My favorite Actor is ${uppercase}, He is a legendary actor.`

message += `his best show is The Wolf on Wall Street`
console.log(message);