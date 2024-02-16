// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn")
secondBtn.onclick = function() {
    console.log("Discipline is the way");
}
// ----------- GREAT WAY-----------
// const best = document.querySelector(".best")

// function greetings(){
//     console.log("hello world");
// }

// best.addEventListener("click", () => console.log("Yellow"))
// ----------- Event (e) Object -----------

const form = document. querySelector("form")
const input = document.querySelector("input")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(event);
    console.log(input.value);
})