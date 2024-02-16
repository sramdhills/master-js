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

const para = document. querySelector(".para")
para.addEventListener("click", (event) => {
    console.log(event);
})