class Stack {
  constructor() {
    this.container = {};
    this.end = 0;
    this.start = 0;
  }

  get size() {
    return this.end;
  }

  push(value) {
    this.end++;
    this.container[this.end] = value;

    if (this.end > 0) {
      this.start = 1;
    }

    return this.end;
  }

  pop() {
    if (this.end === 0) {
      return undefined;
    }
    const elem = this.container[this.end];
    delete this.container[this.end];
    this.end--;
    return elem;
  }
}

const stack = new Stack();

// stack.push(1)
// stack.push(2)
// stack.push(3)

// console.log(stack.size);
