class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }
}

const isBalanced = (binaryTree) => {
  if (!binaryTree || !binaryTree.root) {
    return true;
  }

  let node = binaryTree.root;
  let depths = { max: Number.MIN_SAFE_INTEGER, min: Number.MAX_SAFE_INTEGER };

  findDepth(depths, node, 0);
  return depths.max - depths.min <= 1;
};

const findDepth = (depths, node, depth) => {
  if (!node) {
    if (depth < depths.min) {
      depths.min = depth;
    }

    if (depth > depths.max) {
      depths.max = depth;
    }
  } else {
    findDepth(depths, node.left, depth + 1);
    findDepth(depths, node.right, depth + 1);
  }
};

// tests
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');

a.left = b;
a.right = c;
b.left = d;
c.left = e;

let bt = new BinaryTree(a);
console.log(isBalanced(bt)); // true

a.left = b;
b.left = c;
c.left = d;
d.left = e;

bt = new BinaryTree(a);
console.log(isBalanced(bt)); // false
