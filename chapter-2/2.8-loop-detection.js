class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

const detectLoop = (head) => {
  let visited = new Set();
  let currNode = head;

  while (currNode) {
    if (visited.has(currNode)) return currNode;

    visited.add(currNode);
    currNode = currNode.next;
  }

  return undefined;
};

// tests
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;

const f = new Node('F');
const g = new Node('G');
const h = new Node('H');

f.next = g;
g.next = h;

console.log(detectLoop(a), 'node c');
console.log(detectLoop(f), 'undefined');
