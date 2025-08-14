class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtFirst(last, data) {
  const newNode = new Node(data);
  newNode.next = last.next;
  last.next = newNode;
  return newNode;
}

function insertAtEnd(last, data) {
  const newNode = new Node(data);
  newNode.next = last.next
  last.next = newNode;
  last = newNode
  return last;
}

function printList(last) {
  let curr = last;
  while (true) {
    console.log(curr.data);
    curr = curr.next;
    if (curr === last) {
      break;
    }
  }
}

let first = new Node(10);
let second = new Node(20);
let third = new Node(30);

first.next = second;
second.next = third;
third.next = first;

//third = insertAtFirst(third, 100);
third = insertAtEnd(third, 40);
printList(first);
