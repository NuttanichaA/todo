
function  showTodoItem(newId, newDescription) {
    const listTodoDiv = document.getElementById('listTodo')
    const todoItem = document.createElement('div')
    todoItem.setAttribute('class', 'todoItem')
    todoItem.setAttribute('id', newId)
    
    const desc = document.createElement('p')
    desc.textContent = newDescription
    todoItem.appendChild(desc)
    const status = document.createElement('button')
    status.textContent = 'Not done'
    todoItem.appendChild(status)
    const rmvButton = document.createElement('button')
    rmvButton.textContent = 'remove'
    todoItem.appendChild(rmvButton)
    listTodoDiv.appendChild(todoItem)
}

function showNumberOfDone(numberOfDone){
    const doneP = document.getElementById('done')
    doneP.textContent = 'Number of Done: ' + numberOfDone
}

function showNumberOfNotDone(numberOfNotDone){
    const notDoneP = document.getElementById('notDone')
    notDoneP.textContent = 'Number of Not Done: ' + numberOfNotDone
}

function removeTodoItem(removeId){
    const listTodoDiv = document.getElementById('listTodo')
    listTodoDiv.removeChild(document.getElementById(removeId))
}

export {showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem}