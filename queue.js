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
var names = ["A", "B", "C"];
var winner = hotPotato(names, 7);
console.log("The winner is: " + winner);
