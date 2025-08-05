// traversal singly linked list
 
class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

function traverseList(head){
    while(head.next !==null){
      console.log(head.data)
      head = head.next
    }
    console.log(head.data)
}

const head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)
head.next.next.next = new Node(40)

traverseList(head)