import { Todo } from "./todo.js";

function todoListManagement() {
  const todos = [];

  function addTodo(desc) {
    if (typeof desc != "string") desc = "empty task";
    const todo = new Todo(desc);
    todos.push(todo);
    return todo.id;
  }

  function findTodo(searchId) {
    return (
      todos.find((todo) => todo.id === Number(searchId)) ??
      `Cannot find this task id: ${searchId}`
    );
  }

  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === Number(searchId));
  }

  function removeTodo(removeId) {
    const index = findIndexTodo(removeId);
    if (index === -1) {
      return `Cannot find this task id: ${removeId}`;
    }
    return todos.splice(index, 1);
  }

  function updateTodo(id, newDescription) {
    const todo = todos[findIndexTodo(id)];
    if (!todo) return `Cannot find this task id: ${id}`;
    todo.setDescription(newDescription);
    return todo;
  }

  function getTodos() {
    return todos;
  }

  function getNumberOfDone() {
    return todos.filter((todo) => todo.done).length;
  }

  function getNumberOfNotDone() {
    return todos.filter((todo) => !todo.done).length;
  }

  function setItemToDone(doneId) {
    const doneItem = findTodo(doneId);
    doneItem.setDone(true);
  }

  function clearTodo() {
    todos = [];
  }

  return {
    addTodo,
    findTodo,
    removeTodo,
    updateTodo,
    getNumberOfDone,
    getTodos,
    getNumberOfNotDone,
    setItemToDone,
    clearTodo,
  };
}

export { todoListManagement };
