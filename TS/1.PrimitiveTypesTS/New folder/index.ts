const button = document.querySelector('.button')
const firstInput = document.querySelector('#first-input') as HTMLInputElement //type casting
const secondInput = document.querySelector('#second-input') as HTMLInputElement //type casting
export const screen = document.querySelector('.screen')
 
function addNumbers(a: number,b: number) {
     screen.innerHTML = (a + b).toString()     
}
 
button.addEventListener('click', () => addNumbers(+firstInput.value, +secondInput.value))
