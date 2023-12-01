// Queue | FIFO (First In, First Out) Ex.: Fila de pessoas
class Queue {
  constructor() {
    var items = [];

    this.enqueue = function (element) {
      items.push(element);
    };

    this.dequeue = function () {
      return items.shift();
    };

    this.front = function () {
      return items[0];
    };

    this.isEmpty = function () {
      return items.length === 0;
    };

    this.size = function () {
      return items.length;
    };

    this.print = function () {
      return items.toString();
    };
  }
}

var queue = new Queue();

queue.enqueue("Marcell");
queue.enqueue("Natália");
queue.enqueue("Django");
console.log(queue.isEmpty());

// console.log(queue.print());

queue.dequeue();
// console.log(queue.print());
