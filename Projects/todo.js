let todoList = []
displayTodo()



function addTodo(){
    let InputElement = document.querySelector('#todoItem')
    let todoItem = InputElement.value
    todoList.push(todoItem)
    InputElement.value = ''
    displayTodo()
}


function displayTodo(){
  let todos = document.querySelector('#todos')

   for (let i = 0; i < todoList.length; i++) {
       console.log(todoList[i])  
      todos.innerText = todos.innerText +  `${todoList[i]}`                                                                     
    }

}
