// import { todoListManagement } from "../lib/todoManagement.js";
// import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from "./UI/todoList.js";

// const {addTodo, getNumberOfDone, getNumberOfNotDone} = todoListManagement()

// showTodoItem(addTodo('test frist todo!'), 'test frist todo!')
// showTodoItem(addTodo('Watch Movies'), 'Watch Movies')
// showTodoItem(addTodo('Visit GrandMum'), 'Visit GrandMum')
// showTodoItem(addTodo('Coding'), 'Coding')

// showNumberOfDone(getNumberOfDone())
// showNumberOfNotDone(getNumberOfNotDone())

import { addTodoHandler,loadHandler, beforeUnloadHandler } from "./eventHandler/eventController.js"
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', addTodoHandler)
document.addEventListener('DOMContentLoaded', loadHandler)
window.addEventListener('beforeunload', beforeUnloadHandler)






