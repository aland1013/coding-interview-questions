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

class SetOfStacks {
  constructor() {
    this.stacks = [];
    const s = new Stack();
    this.stacks.push(s);
    this.stackCapacity = 3;
    this.stacksIndex = 0;
    this.currentStack = this.stacks[0];
  }

  push(value) {
    if (this.currentStack.length === this.stackCapacity) {
      this.stacks.push(new Stack());
      this.stacksIndex++;
      this.currentStack = this.stacks[this.stacksIndex];
    }

    this.currentStack.push(value);
  }

  pop() {
    if (this.currentStack.isEmpty()) {
      this.stacks.pop();
      this.stacksIndex--;
      this.currentStack = this.stacks[this.stacksIndex];
    }

    return this.currentStack.pop();
  }

  popAt(stacksIndex) {
    if (stacksIndex < this.stacks.length) {
      let value = null;

      if (stacksIndex < this.stacks.length) {
        value = this.stacks[stacksIndex].pop();
      }

      let tempStack = [];

      while (stacksIndex !== this.stacksIndex) {
        tempStack.push(this.pop());
      }

      while (tempStack.length > 0) {
        this.push(tempStack.pop());
      }

      return value;
    }
  }
}

// tests
let s = new SetOfStacks();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s.popAt(0));
console.log(s.pop());
// console.log(s.popAt(1));
