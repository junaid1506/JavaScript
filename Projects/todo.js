let todoList = []




function addTodo(){
    let InputElement = document.querySelector('#todoItem')
    let todoItem = InputElement.value
    todoList.push(todoItem)
    InputElement.value = ''

    for (let i = 0; i < todoList.length; i++) {
      console.log(todoList[i])
                                                                                
    }





}

