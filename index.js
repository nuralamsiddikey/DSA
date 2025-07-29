class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function searchKey(head, key) {
  if (head === null) return false;

  if (head.data === key) return true;
  return searchKey(head.next, key);
}

const head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

const key = 40;
console.log(searchKey(head, key));
