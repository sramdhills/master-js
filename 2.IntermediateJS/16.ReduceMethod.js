//reduce() method

const numbers = [1,2,3,4,5]
const sum = numbers.reduce((p, c) => {
    console.log(`Previous: ${p}`); //Previous value
    console.log(`Current: ${c}`); // Current value
    return p + c
}, 0)

console.log(sum);

//using reduce() method to find the oldest among the objects in the array.
const peoples = [
    {name: 'vann', age: 24},
    {name: 'dhills', age: 24},
    {name: "sram", age: 18}
]

const oldestAge = peoples.reduce((p,c) => (c.age > p ? c.age : p), 0)
console.log(oldestAge);


//reduce()

const words = [
    "apple",
    "banana",
    "orange",
    "banana",
    "apple",
    "grape",
]

const wordFrequency = words.reduce((frequencyMap, word) => {
    frequencyMap[word] = (frequencyMap[word] || 0 + 1)
    return frequencyMap
}, {})

console.log(wordFrequency);


//reduce()  method challenge

function calculateProduct (prevNum, currNum) {
    return prevNum * currNum
}

const number = [52,33,4,5]
const product = number.reduce(calculateProduct)
console.log(product);