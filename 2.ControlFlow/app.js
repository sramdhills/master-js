//CONDITIONAL STATEMENTS

//if (condition) {...}
//else if (condition) {..}
//else {..}



// let time = 10
// let greetings;

// if (time < 10) {
//     greetings = "God Morgen"
//     console.log(greetings);
// } else if (time < 20) {
//     greetings = "Good day"
//     console.log(greetings);
// } else {
//     greetings = "God kveld"
//     console.log(greetings);
// }

//CHALLENGE CONDITIONAL STATEMENTS

let password

if (password === 8) {
    console.log("Welcome");
} else if  (password <= 8) {
    console.log("Password is too short");
} else if (password >= 8) {
    console.log("Too Long Password");
    console.log("Password should be 8 characters");
} else {
    console.log("Please provide a password");
}

//Switch Statements

//switch (expression) {
    //case x;
        //print
        //break
    //case y;
        //print
        //break
//}
let day = 'Thursday'

switch (day) {
    case "Monday":
        console.log('Today is Monay');
        break;
    case "Tuesday":
        console.log("Today is Tacos Day");
        break;
    case " Wednesday":
        console.log("Today is Worship service day");
        break;
    case "Thursday":
        console.log("Today is Thirst Day");
        break;
    case "Friday":
        console.log("Today is Fryayy");
        break;
    case "Saturday":
        console.log("Today is Saute Day");
        break;
    case "Sunday":
        console.log("Today is Rest Day");
    default:
         console.log("Don't know what day is today");
}

//CHALLENGE SWITCH STATEMENTS