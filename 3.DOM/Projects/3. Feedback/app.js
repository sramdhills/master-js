// Getting Elements From The DOM
const ratings = document.querySelectorAll(".rating")
const ratingsContainer = document.querySelector(".ratings-container")
const sendBtn = document. querySelector("#send")
const panel = document.querySelector("panel")

let selectedRating = "Satisfied"


// Attaching Event
ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains("rating")) {
        // console.log(e.target.parentNode.classList.contains("rating"));
        removeActive()
        ratings.target.parentNode.classList.add("active")
        selectedRating = e.target.nexElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
    <p class = "heart'> <3/
    <strong> Thank You! </strong>
    <br>
    <strong> Feedback: ${selectedRating}</strong>
</p>`
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++)
    ratings[i].classList.remove('active')
}