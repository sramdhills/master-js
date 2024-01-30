//forEach helper we  pass in anonymous callback function
//This function gets called one time for every element in the array
//Whatever is inside the function that logic happens.

const colors = ['teal', 'blue', 'red', 'green']

colors.forEach(col => console.log(`${col} is the color`));


//next example

//challenge forEach

const arrNum = [1, 3, 5, 62, 566, 233]

let sum = 0//sum variable

function adder(num) {
    sum += num
    return sum
}

arrNum.forEach(adder)
console.log(sum);//return once the output is done