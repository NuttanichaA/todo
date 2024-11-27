class Todo{
    static nextId = 1
    constructor (description, done = false){
        this.id = Todo.nextId++
        this.description = description
        this.done = done
    }

    getTodo(){
        return {id: this.id, description: this.description}
    }

    setDescription(newDescription){
        this.description = newDescription
    }

    setDone(status){
        this.done = status
    }
}

export {Todo}