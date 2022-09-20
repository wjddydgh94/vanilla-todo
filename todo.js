const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.addEventListener("click", handleDeleteTodo);
  button.innerText = "삭제";
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newTodo);
}

function handleDeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

toDoForm.addEventListener("submit", handleTodoSubmit);
