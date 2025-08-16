class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

function insertAfter(head,data,key){
    const newNode = new Node(data)
    let curr = head
    for(let i=1;i<=key;i++){
      if(i === key){
         newNode.next = curr.next
         curr.next = newNode
      } else {
        curr = curr.next
      }
    }
    console.log(head)
    
}


const head = new Node(10)
const second = new Node(20)
const third = new Node(30)

head.next = second
second.next = third

const data = 100
const key = 2

insertAfter(head,data,key)