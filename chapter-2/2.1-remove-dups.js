class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const printLinkedList = (head) => {
  let node = head;

  console.log('start of linked list');

  while (node) {
    console.log(node.value);
    node = node.next;
  }

  console.log('end of linked list');
};

const removeDups = (head) => {
  let current = head;
  let values = new Set();
  values.add(current.value);
  let prev = current;
  current = current.next;

  while (current) {
    if (values.has(current.value)) {
      prev.next = prev.next.next;
    } else {
      values.add(current.value);
      prev = current;
    }

    current = current.next;
  }

  return head;
};

// tests
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

removeDups(a);
printLinkedList(a);

let f = new Node('f');
let g = new Node('g');
let h = new Node('g');
let i = new Node('g');
let j = new Node('g');

f.next = g;
g.next = h;
h.next = i;
i.next = j;

removeDups(f);
printLinkedList(f);
