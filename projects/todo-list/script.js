// elements
let todosCount = 0
const todoList = document.querySelector('.todo__list')
const todoInput = document.querySelector('[data-todo="input"')
const todoBtnAdd = document.querySelector('[data-todo="btn-add"]')

todoBtnAdd.addEventListener('click', function(event) {
  event.preventDefault()

  if (todoInput.value.length < 3) {
    alert('Please enter a Task! Min. 3 character')
  } else {
    todosCount++
    let newTask = document.createElement('li')
    newTask.innerHTML = `<span>${todoInput.value}</span>
        <span>
          <button data-todo="btn-ok">OK</button>
          <button data-todo="btn-delete">X</button>
        </span>`
    todoList.appendChild(newTask)
    todoInput.value = ''
  }
})

todoList.addEventListener('click', function(event) {
  event.preventDefault()

  let btnOk = event.target.matches('[data-todo="btn-ok"]')
  let btnDelete = event.target.matches('[data-todo="btn-delete"]')

  if (btnOk) {
    event.target.parentElement.previousElementSibling.style.textDecoration = 'line-through'
    event.target.disabled = true
  }

  if (btnDelete) {
    event.target.parentElement.parentElement.remove()
    
  }
})