//map method is a built-in data structure introduced in (ES6) that allows you to store
//key-value pairs where both the keys and values can be of any data type.
//it is similar to object, but with a few key differences.

//-> Keys can be of any data type: map allows you to use any data type as keys,
//including numbers, booleans, objects, and even other  Map instances.

//-> Maintains insertion order : Map preserves the order of key-value pairs as they were 
//inserted, while object keys may not be guaranteed to be in a specifi order.

//-> Iteration: Map provides built-in methods for easy iteration over its elements.



const map = new Map()

const keyOne = "string"
const keyTwo = {}
const keyThree =  function() {} 

map.set(keyOne, "Value of key one")
map.set(keyTwo, "Value of key two")
map.set(keyThree, "Value of key three")

console.log(map.keys())
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map.size);

console.log(map)



//

//getting the key and values
for (let [key, value] of map) {
    console.log(`${key} -- ${value}`);
}
//getting the keys
for (let key of map.keys()) {
    console.log(key);
}

//getting the values
for (let value of map.values()) {
    console.log(value);
}