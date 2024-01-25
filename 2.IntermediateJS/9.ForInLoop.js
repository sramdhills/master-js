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
        console.log(keys);
    }