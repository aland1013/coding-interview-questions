class Stack {
  constructor() {
    this.data = [];
    this.minValue = null;
  }

  get length() {
    return this.data.length;
  }

  get min() {
    return this.minValue;
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.data.pop();
      if (value === this.min) {
        this.minValue = Math.min(...this.data);
      }
    }
  }

  push(value) {
    this.data.push(value);

    if (this.length === 1) {
      this.minValue = value;
    } else {
      this.minValue = this.minValue <= value ? this.minValue : value;
    }
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

//tests
let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
console.log(s.length);
console.log(s.peek());
s.pop();
console.log(s.length);
console.log(s.peek());
console.log(s.min);
s.push(-1);
console.log(s.min);
console.log(s.length);
console.log(s.isEmpty());
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
console.log(s.length);
console.log(s.isEmpty());
