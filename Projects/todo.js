let todoList = [

  {
    item : "Doodh lene jana hai",
    dueDate : "12/10/2025"
  },
  {
    item : "Assisment sumbit krne hai",
    dueDate : "12/10/2025"
  }



];
displayTodo();

function addTodo() {
  let InputElement = document.querySelector("#todoItem");
  let InputDate = document.querySelector("#todoDate");
  let todoItem = InputElement.value;
  let todoDate = InputDate.value;
  todoList.push({
    item:todoItem,
    todoDate:todoDate
  });
  InputElement.value = "";
  InputDate.value = ""
  displayTodo();
}

function displayTodo() {
  let todos = document.querySelector("#todos");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let {item,todoDate} = todoList[i];
    newHtml += `
        <div>
          <span>${item}</span>
          <span>${todoDate}</span>
          <button onclick="todoList.splice(${i}, 1) 
          displayTodo()">Delete</button>
        </div>  
      `;
  }
  console.log(newHtml);
  todos.innerHTML = newHtml;
}
