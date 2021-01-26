class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new Node(value);
        this.left.parent = this;
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new Node(value);
        this.right.parent = this;
      }
    }
  }

  findSuccessor() {
    let successor = null;

    if (this.right) {
      successor = this.right;
      while (successor.left) {
        successor = successor.left;
      }
    } else {
      if (this === this.parent.left) {
        successor = this.parent;
      } else {
        successor = this.parent;
        while (successor !== successor.parent.left) {
          successor = successor.parent;
        }
        successor = successor.parent;
      }
    }

    return successor.value;
  }
}

// tests
let a = new Node(8);
a.insert(4);
a.insert(10);
a.insert(2);
a.insert(6);
a.insert(20);

console.log(a.left.right.findSuccessor());
