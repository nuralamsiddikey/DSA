class Stack {
    constructor(){
        this.items = []
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        if(this.isEmpty())
           return "Items is empty"
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty())
            return "Items is empty"
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
}


const stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(15)

console.log(stack.peek())