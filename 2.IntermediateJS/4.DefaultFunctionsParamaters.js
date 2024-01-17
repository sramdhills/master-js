//Default Function Parameters

//gives default values to parameters that are
//not given value or undefined

function ratings(rate = 0) { //default Function parameters
    if(rate > 3) {
        console.log(`High Ratings :> `);
    } else if (rate > 0 && rate <= 3) {
        console.log(`Low Ratings :< `);
    } else if (rate === 0) {
        console.log(`No Ratings :|`);
    }
}

ratings()

//CHALLENGE

function multiply(a, b = 1) {
    return a * b
}

const mult = multiply(40)
console.log(mult);