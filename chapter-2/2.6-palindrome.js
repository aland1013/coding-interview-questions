class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

const isPalindrome = (head) => {
  if (!head.value) {
    return false;
  }

  // reverse the list
  let clone = head;
  let rev = new Node(clone.value);
  while (clone.next) {
    clone = clone.next;
    const n = new Node(clone.value);
    n.next = rev;
    rev = n;
  }

  // compare head and rev
  while (head && rev) {
    if (head.value !== rev.value) {
      return false;
    }
    head = head.next;
    rev = rev.next;
  }

  return head === rev;
};

// tests
const a = new Node('m');
const b = new Node('a');
const c = new Node('d');
const d = new Node('a');
const e = new Node('m');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const f = new Node('f');
const g = new Node('g');

f.next = g;

console.log(isPalindrome(a), 'true');
console.log(isPalindrome(f), 'false');
