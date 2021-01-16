class Stack {
  constructor() {
    this.data = [];
  }

  get length() {
    return this.data.length;
  }

  pop() {
    if (!this.isEmpty()) {
      return this.data.pop();
    }
  }

  push(item) {
    this.data.push(item);
  }

  peek() {
    if (!this.isEmpty()) {
      return this.data[this.length - 1];
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}

const sortStack = (unsorted) => {
  let temp = new Stack();
  temp.push(unsorted.pop());

  while (!unsorted.isEmpty()) {
    let curr = unsorted.pop();
    let count = 0;

    while (!temp.isEmpty() && curr < temp.peek()) {
      unsorted.push(temp.pop());
      count++;
    }

    temp.push(curr);
    for (let i = 0; i < count; i++) {
      temp.push(unsorted.pop());
    }
  }

  while (!temp.isEmpty()) {
    unsorted.push(temp.pop());
  }

  return unsorted;
};

// tests
let s = new Stack();
s.push(1);
s.push(3);
s.push(2);
s.push(6);
s.push(4);
s.push(7);
s.push(9);

console.log(s);

s = sortStack(s);
console.log(s);
