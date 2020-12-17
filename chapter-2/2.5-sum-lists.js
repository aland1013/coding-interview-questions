class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

const sumLists = (a, b) => {
  if (!a) return b;
  if (!b) return a;

  let c = new Node(a.value + b.value);
  const head = c;

  let carryOne = false;
  if (c.value >= 10) {
    carryOne = true;
    c.value -= 10;
  }

  while (a.next || b.next) {
    if (!a.next) {
      a.value = 0;
    } else {
      a = a.next;
    }
    if (!b.next) {
      b.value = 0;
    } else {
      b = b.next;
    }

    let sum = a.value + b.value;
    if (carryOne) sum += 1;
    carryOne = false;

    if (sum >= 10) {
      carryOne = true;
      sum -= 10;
    }

    c.next = new Node(sum);
    c = c.next;
  }

  if (carryOne) {
    c.next = new Node(1);
    c = c.next;
  }

  return head;
};

const printLinkedList = (head) => {
  console.log('start');
  while (head) {
    console.log(head.value);
    head = head.next;
  }
  console.log('end');
};

// tests
const a = new Node(7);
const b = new Node(1);
const c = new Node(6);

a.next = b;
b.next = c;

const d = new Node(5);
const e = new Node(9);
const f = new Node(2);

d.next = e;
e.next = f;

const g = sumLists(a, d);
printLinkedList(g);
console.log('2 -> 1 -> 9');

const m = new Node(0);
const n = new Node(0);
const o = new Node(0);
const p = new Node(1);

m.next = n;
n.next = o;
o.next = p;

const q = new Node(0);
const r = new Node(0);
const s = new Node(1);

q.next = r;
r.next = s;

const t = sumLists(m, q);
printLinkedList(t);
console.log('0 -> 0 -> 1 -> 1');
