class Queue {
    constructor(){
        this.items = []
    }
    enqueue(item){
        this.items.push(item)
    }
    dequeue(){
        if(this.isEmpty())
            return "Items is empty"
        return this.items.shift()
    }
    front(){
        if(this.isEmpty())
            return "Items is empty"
        return this.items[0]
    }
    isEmpty(){
        return this.items.length === 0
    }
}

const queue = new Queue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)

console.log(queue.front())