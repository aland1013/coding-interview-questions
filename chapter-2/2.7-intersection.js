class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

const checkIntersect = (listA, listB) => {
  for (let k = listA; k != null; k = k.next) {
    for (let j = listB; j != null; j = j.next) {
      if (k === j) {
        return k;
      }
    }
  }

  return undefined;
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

console.log(checkIntersect(a, d), 'undefined');
console.log(checkIntersect(a, g), 'node c');
