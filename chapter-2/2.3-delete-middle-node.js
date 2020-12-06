class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

const deleteMiddleNode = (node) => {
  if (!node || !node.next) {
    return false;
  }

  node.data = node.next.data;
  node.next = node.next.next;

  return true;
};

const printList = (head) => {
  console.log('start');

  while (head) {
    console.log(head.data);
    head = head.next;
  }

  console.log('end');
};

// tests
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

printList(a);
deleteMiddleNode(e);
printList(a);
deleteMiddleNode(c);
printList(a);
