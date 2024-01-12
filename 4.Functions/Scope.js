//Scope regers to the current context of code, which determines
//the availability of variables to Javascript

//Global scope variables declared outside of a block
//Local scope variables declared inside of a block

let textMessage = "Hi" //Global variable. outside of a braces, can be access anywhere
console.log(textMessage);


function showMessage() {
    let theMessage = "Hello" //Local variable, can be accessed only in the block
    console.log(theMessage);
    console.log(textMessage);//accessed the Global variable
}

showMessage()


for (let i = 0; i < 5; i++) {
    console.log(i); //local variable, accessed only inside the block
    
}
console.log(i); // i is not defined. cannot accessed a local.

