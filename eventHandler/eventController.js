import { todoListManagement } from "../lib/todoManagement.js";
import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
  removeTodoItem,
} from "../UI/todoList.js";

const {
  addTodo,
  removeTodo,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  getTodos,
  clearTodo,
  loadTodo,
} = todoListManagement();

function addTodoHandler() {
  const inputField = document.querySelector("input");
  const input = inputField.value.trim();
  if (input !== "") {
    const newTodoId = addTodo(input);
    showTodoItem(newTodoId, input);
    const newTodoNode = document.getElementById(newTodoId);
    const newNodeChild = newTodoNode.children;
    newNodeChild[1].addEventListener("click", notDoneButtonHandler);
    newNodeChild[2].addEventListener("click", removeButtonHandler);
  }
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
}

function notDoneButtonHandler(event) {
  const notDoneBtn = event.target;
  const todoItem = notDoneBtn.parentElement;
  notDoneBtn.textContent = "done";
  notDoneBtn.setAttribute("style", "background-color: green; color: white;");
  setItemToDone(todoItem.getAttribute("id"));
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
}

function removeButtonHandler(event) {
  const removeBtn = event.target;
  const todoItem = removeBtn.parentElement;
  removeTodoItem(todoItem.getAttribute("id"));
  removeTodo(todoItem.getAttribute("id"));
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
}

function loadHandler() {
  const stringTodos = localStorage.getItem("todos");
  if (
    stringTodos !== null &&
    stringTodos !== undefined &&
    stringTodos !== "" &&
    stringTodos !== "[]"
  ) {
    const userTodos = JSON.parse(stringTodos);
    loadTodo(userTodos);
    getTodos().forEach((todo) => {
      showTodoItem(todo.id, todo.description);
      const todoNode = document.getElementById(todo.id);
      const todoNodeChild = todoNode.children;
      if (todo.done) {
        todoNodeChild[1].textContent = "done";
        todoNodeChild[1].setAttribute(
          "style",
          "background-color: green; color: white;"
        );
      } else {
        todoNodeChild[1].addEventListener("click", notDoneButtonHandler);
      }
      todoNodeChild[2].addEventListener("click", removeButtonHandler);
    });
    showNumberOfDone(getNumberOfDone());
    showNumberOfNotDone(getNumberOfNotDone());
    const addBtn = document.querySelector("#addBtn");
    addBtn.addEventListener("click", addTodoHandler);
  }
}

function beforeUnloadHandler(event) {
  event.preventDefault();
  localStorage.setItem("todos", JSON.stringify(getTodos()));
  clearTodo();
}

export { addTodoHandler, loadHandler, beforeUnloadHandler };
