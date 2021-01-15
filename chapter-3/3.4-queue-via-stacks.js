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

  push(value) {
    this.data.push(value);
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

class MyQueue {
  constructor() {
    this.data = new Stack();
    this.temp = new Stack();
  }

  remove() {
    while (this.data.length > 0) {
      this.temp.push(this.data.pop());
    }

    const value = this.temp.pop();

    while (this.temp.length > 0) {
      this.data.push(this.temp.pop());
    }

    return value;
  }

  add(item) {
    return this.data.push(item);
  }

  peek() {
    while (this.data.length > 0) {
      this.temp.push(this.data.pop());
    }

    const value = this.temp.peek();

    while (this.temp.length > 0) {
      this.data.push(this.temp.pop());
    }

    return value;
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

// tests
let q = new MyQueue();
q.add(1);
q.add(2);
q.add(3);
console.log(q.peek()); // 1
console.log(q.remove()); // 1
console.log(q.peek()); // 2
q.add(4);
console.log(q.peek()); // 2
console.log(q.remove()); // 2
console.log(q.remove()); // 3
console.log(q.remove()); // 4
