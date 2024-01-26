//for "for...of" loop in javascript isa modern interation 
//statement introduced in ECMAScript 6 (ES6) that porvides a concise and easy way to loop over elements in iterable objevts like arrays, strings, maps, sets, and more.
//it allows you to iterate drectky over the values of the elements


//for (variable of iterable) {...}

let peoples = ['dhills', 'disciplines']

for (let people of peoples) {
    console.log(people);
}


const text = 'hello'

for (const char of text){
    console.log(char);
}


//CHALLENGE for of loop

const array1 = ['a', 'b', 'c', 'd']
for(let values of array1) {
    console.log(values);
}