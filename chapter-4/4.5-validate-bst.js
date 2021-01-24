class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const validateBST = (
  root,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY
) => {
  if (root) {
    if (root.value < min || root.value > max) return false;

    return (
      validateBST(root.left, min, root.value) &&
      validateBST(root.right, root.value, max)
    );
  }

  return true;
};

// tests
let a = new Node(8);
let b = new Node(4);
let c = new Node(10);
let d = new Node(2);
let e = new Node(6);
let f = new Node(20);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(validateBST(a)); // true

e.value = 12;
console.log(validateBST(a)); // false
