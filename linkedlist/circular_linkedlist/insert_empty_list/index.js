class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertEmptyList(head, data) {
  if (head !== null) {
    return "this is not emptly list";
  }
  const newNode = new Node(data);
  newNode.next = newNode;
  head = newNode;
  return head;
}

function printList(head) {
  while (true) {
    console.log(head.data);
    head = head.next;
    if (head.next === head) {
      break;
    }
  }
}

let head = null;
head = insertEmptyList(head, 10);
printList(head);
