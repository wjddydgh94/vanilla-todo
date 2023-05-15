const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-input");
const toDoList = document.getElementById("todo-list");

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

function handleAddTodo(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newTodo);
}

function handleDeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

toDoForm.addEventListener("submit", handleAddTodo);

const initialState = ["asdf", "qwer", "zxcv"];

function getInitial(initialState) {
  initialState.forEach((element) => {
    paintTodo(element);
  });
}

getInitial(initialState);
