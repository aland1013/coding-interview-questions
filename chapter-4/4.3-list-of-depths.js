class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  addToTail(data) {
    let newNode = new ListNode(data);
    let lastNode = this.getLast();

    if (!lastNode) {
      return (this.head = newNode);
    }

    lastNode.next = newNode;
  }
}

class bstNode {
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
        this.left = new bstNode(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new bstNode(value);
      }
    }
  }

  createDepthLists() {
    let q = [this, 's'];
    let depths = [new LinkedList()];

    while (q.length > 1) {
      const n = q.shift();

      if (n === 's') {
        q.push(n);
        depths.push(new LinkedList());
      } else {
        depths[depths.length - 1].addToTail(n.value);

        if (n.left) {
          q.push(n.left);
        }

        if (n.right) {
          q.push(n.right);
        }
      }
    }

    return depths;
  }
}

const createMinimalTree = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  const root = new bstNode(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    root.insert(arr[i]);
  }

  return root;
};

// tests
const mt = createMinimalTree([1, 8, 5, 7, 6, 3, 4, 2]);
const depthLists = mt.createDepthLists(); // [[1], [8], [5], [3,7], [2,4,6]]

for (let list of depthLists) {
  let curr = list.head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
  console.log('\n');
}
