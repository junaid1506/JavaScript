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
    let todos = document.querySelector('#todos');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        newHtml += `
        <div>
          <span>${todoList[i]}</span>
          <button>Delete</button>
        </div>  
      `; 
    }
    console.log(newHtml)
   todos.innerHTML = newHtml;
}


