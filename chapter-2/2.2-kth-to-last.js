class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

const kthToLast = (head, k) => {
  let lastNode = head;
  let kthNode = head;

  for (let i = 0; i < k; i++) {
    lastNode = lastNode.next;
    if (!lastNode) {
      return 'error - not enough nodes in list';
    }
  }

  while (lastNode.next) {
    lastNode = lastNode.next;
    kthNode = kthNode.next;
  }

  return kthNode.data;
};

// tests
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

console.log(kthToLast(a, 0), 'd');
console.log(kthToLast(a, 1), 'c');
console.log(kthToLast(a, 2), 'b');
console.log(kthToLast(a, 3), 'a');
