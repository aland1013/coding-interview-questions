class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

const partition = (head, value) => {
  if (!head.next) {
    return head;
  }

  let tail = head;

  while (tail.next) {
    tail = tail.next;
  }

  let origTail = tail;

  let current = head;
  while (current.data >= value) {
    head = current.next;
    current.next = null;
    tail.next = current;
    tail = current;
    current = head;
  }

  prev = current;
  current = current.next;

  while (current != origTail) {
    if (current.data >= value) {
      prev.next = current.next;
      current.next = null;
      tail.next = current;
      tail = current;
      current = prev;
    }

    prev = current;
    current = current.next;
  }

  return head;
};

const printLinkedList = (head) => {
  console.log('start');
  while (head) {
    console.log(head.data);
    head = head.next;
  }
  console.log('end');
};

// tests
const a = new Node(3);
const b = new Node(5);
const c = new Node(8);
const d = new Node(5);
const e = new Node(10);
const f = new Node(2);
const g = new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

printLinkedList(a);
partition(a, 5);
printLinkedList(a);
