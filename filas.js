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

/* 
var queue = new Queue();
queue.enqueue("Marcell");
queue.enqueue("Natália");
queue.enqueue("Django");
queue.dequeue();
console.log(queue.print());
*/

/* 
//#region Priority Queue

class PriorityQueue {
  constructor() {
    var items = [];

    class QueueElement {
      constructor(element, priority) {
        this.element = element;
        this.priority = priority;
      }
    }

    this.enqueue = function (element, priority) {
      var queueElement = new QueueElement(element, priority);
      var added = false;

      for (let i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) items.push(queueElement);
    };

    this.dequeue = function () {
      return items.shift();
    };

    this.print = function () {
      for (let i = 0; i < items.length; i++) {
        console.log(items[i].element + " " + items[i].priority);
      }
    };
  }
}

var pqueue = new PriorityQueue();

pqueue.enqueue("Marcell", 2);
pqueue.enqueue("Natália", 1);
pqueue.enqueue("Django", 1);
pqueue.enqueue("João", 0);
pqueue.enqueue("Maria", 3);
pqueue.print();

//#endregion
 */

function hotPotato(namelist, num) {
  var queue = new Queue();

  for (let i = 0; i < namelist.length; i++) {
    queue.enqueue(namelist[i]);
  }

  var eliminated = "";

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated, "was eliminated from hot potato game");
  }

  return queue.dequeue();
}

var names = ["Marcell", "Natália", "Django"];
var winner = hotPotato(names, 7);
console.log("The winner is: " + winner);
