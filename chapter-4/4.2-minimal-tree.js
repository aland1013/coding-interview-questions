class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new Node(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new Node(value);
      }
    }
  }

  printBFT() {
    let q = [];
    q.push(this);

    while (q.length !== 0) {
      const n = q.shift();

      if (n.left) {
        q.push(n.left);
      }

      if (n.right) {
        q.push(n.right);
      }

      console.log(n.value);
    }
  }
}

const createMinimalTree = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  const root = new Node(arr[0]);
  console.log(root);

  for (let i = 1; i < arr.length; i++) {
    root.insert(arr[i]);
    console.log(root);
  }

  return root;
};

// tests
const mt = createMinimalTree([1, 8, 5, 7, 6, 3, 4, 2]);
mt.printBFT(); // [1, 8, 5, 7, 3, 6, 4, 2]
