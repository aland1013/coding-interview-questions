class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

const checkIntersect = (listA, listB) => {
  while (listA && listB) {
    if (listA === listB) {
      return true;
    }
    listA = listA.next;
    listB = listB.next;
  }
  return false;
};

// tests
const a = new Node('1');
const b = new Node('2');
const c = new Node('3');

a.next = b;
b.next = c;

const d = new Node('1');
const e = new Node('2');
const f = new Node('3');

d.next = e;
e.next = f;

const g = new Node('1');
const h = new Node('2');

g.next = h;
h.next = c;

console.log(checkIntersect(a, d), 'false');
console.log(checkIntersect(a, g), 'true');
