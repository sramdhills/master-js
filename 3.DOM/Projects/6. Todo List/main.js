//Select the elements using querySelector, and put into a variable
let form = document.querySelector('form')
let input = document.querySelector('input')
let todos = document.querySelector('.todos')

form.addEventListener('submit', e => {
  e.preventDefault()
  let value = input.value
  if(!value.trim()) return
  todos.appendChild(getTodo(value))
  input.value = ""
})
//displaying submitted  value
function getTodo(value) {
  let todo = document.createElement("div")
  let textEl = document.createElement("span")

  //set value & styles
  textEl.innerHTML = value

  //appendChild to the DOM
  todo.appendChild(textEl)

  //add close button
  let closeEl  = document.createElement('span')
  closeEl.innerHTML = "&times"
  closeEl.classList.add("delete")

  //closeEl click to close event
  closeEl.addEventListener('click',(e) => {
    todos.removeChild(todo)
  })
//appendChild closeEl to DOM
  todo.appendChild(closeEl)
  todo.classList.add("todo")
  return todo

}
//didn't learn enough well

//flow
//form -> submit value -> getTodo(value)