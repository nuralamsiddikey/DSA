class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function count(head) {
  let c = 0;

  while (head !== null) {
    c++;
    head = head.next;
  }
  return c;
}

const head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);

console.log(count(head))