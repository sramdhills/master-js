//for ... in looop in JS
    //used to iterate over the enumerable properties of an object
    //it is a way to loop through the keys of an object

    //for (let key in objectname) {...}

    let person = {
        name: "Discipline",
        age: 24,
        gender: "male",
    }

    for (let keys in person) {
        console.log(`${keys}: `, person[keys]); //keys shows property names
    } 

//Array For ... in loop
    let list = ['one','two', 'three', 'four']
    for (let key in list) {
        console.log(`${key}: `, list[key]); //key shows index number
    }


//CHALLENGE for ...in loop

const object = {a:1,b:2,c:3}

for (let letter in object) {
    console.log(`${letter}:`, object[letter]);
}