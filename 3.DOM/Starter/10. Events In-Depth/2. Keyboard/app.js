// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");
// input.addEventListener('keypress',() => {
//     console.log("Key pressed");
// })

// input.addEventListener('keyup',() => {
//     console.log("Key up");
// })

// input.addEventListener('keydown',() => {
//     console.log("Key down");
// })

//----USEFUL PROPERTIES/ METHODS----//
input.addEventListener('keypress', e => {
    // console.log(e.charCode);
    // console.log(e.code);
    console.log(e.ctrlKey); //checks if the control key is hold
    console.log(e.key);
    console.log(e.shiftKey); // checks if the shift key is hold
})