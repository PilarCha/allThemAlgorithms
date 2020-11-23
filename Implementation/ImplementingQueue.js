class Queue {
  constructor() {
    this.items=[];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if(this.isEmpty())
      return "Underflow";

    return this.items.shift();
  }

  front() {
    if(this.isEmpty())
      return "No elements in Queue"
    return this.items[0];
  }

  back() {
    if(this.isEmpty())
      return "No elements in Queue"
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQueue() {
    var str = "";

    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

var queue = new Queue();

console.log(queue.dequeue());

console.log(queue.isEmpty());

queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(89);
queue.enqueue(44);

console.log(queue.front());

console.log(queue.back());
