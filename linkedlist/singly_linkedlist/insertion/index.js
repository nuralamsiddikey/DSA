class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAtFront(head, data) {
  const newNode = new Node(data);
  newNode.next = head;
  return newNode;
}

function insertAtEnd(head, data) {
  const newNode = new Node(data);

  let current = head;
  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
  return head;
}

function insertPosition(pos, data, head) {
  const newNode = new Node(data);
  if (pos === 1) {
    newNode.next = head;
    return newNode;
  }

  let current = head;

  for (let i = 1; i < pos - 1 && current.next !==null; i++) {
    current = current.next;
  }

  newNode.next = current.next;
  current.next = newNode;

  return head;
}

function printList(head) {
  while (head !== null) {
    console.log(head.data + " ");
    head = head.next;
  }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

//head = insertAtFront(head, 5);
//head = insertAtEnd(head, 40);

head = insertPosition(3, 100, head);
printList(head);
