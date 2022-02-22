class Queue {
  constructor() {
    this.container = {};
    this.end = 0;
    this.start = 0;
  }

  get size() {
    if (this.start === this.end && !(this.start in this.container)) {
      return 0;
    }

    return this.end + 1 - this.start;
  }

  push(value) {
    this.end++;
    this.container[this.end] = value;

    if (this.start === 0) {
      this.start = 1;
    }

    return this.end;
  }

  pop() {
    if (this.start === this.end && !(this.start in this.container)) {
      return undefined;
    }

    const elem = this.container[this.start];
    delete this.container[this.start];
    if (this.start < this.end) {
      this.start++;
    }
    return elem;
  }
}

const queue = new Queue();

queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue.size);
