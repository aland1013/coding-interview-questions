class Node {
  constructor(value = 0) {
    this.value = value;
    this.next = null;
  }
}

const sumLists = (a, b) => {
  let c = new Node(a.value + b.value);
  const head = c;
  let carryOne = false;
  if (c.value >= 10) {
    carryOne = true;
    c.value -= 10;
  }
  console.log(c.value, carryOne);

  while (a.next || b.next) {
    a = a.next;
    b = b.next;

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

printLinkedList(a);
printLinkedList(d);

const g = sumLists(a, d);
printLinkedList(g);
console.log('2 -> 1 -> 9');
