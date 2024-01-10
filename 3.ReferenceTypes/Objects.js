//OBJECTS --> {key: value}

const userInfo = {
    firstName: "Discpline",
    lastName: "is my last name", //don't forget comma after.
    age: 19,
    location: ['Planet', 'Earth'],
    isProgrammer: true,
    
}

console.log(userInfo);

//ACCESSING ITEMS/ELEMENTS from OBJECTS
 
console.log(userInfo.age); //dot notation, works to string key only

console.log(userInfo['lastName']);//bracket notation, works with numbered key

//NEW value to the Object

userInfo.midName = "Determination"
userInfo.newKey = "newValue"
console.log(userInfo);

//deleting/remove item/element to the object

delete userInfo.firstName
console.log(userInfo);

//CHALLENGE OBJECT
const car = {
    type: "BMW",
    model: "X2",
    color: "blue",
}

console.log(car.type);
console.log(car.type = "Toyota");
car.wheels = 4
console.log(car);

