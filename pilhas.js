//LIFO (Last In First Out - Ultimo que entra é o primeiro que sai) Ex.: Pilha de livros
class Stack {
  constructor() {
    var items = [];

    this.push = function (element) {
      //Adiciona um novo item da pilha
      items.push(element);
    };

    this.pop = function () {
      //Remove o item do topo da pilha
      return items.pop();
    };

    this.peek = function () {
      //Retorna o elemento que está no topo da pilha
      return items[items.length - 1];
    };

    this.isEmpty = function () {
      //Informa se a pilha está vazia ou não
      return items.length === 0;
    };

    this.clear = function () {
      //Limpa a pilha
      items = [];
    };

    this.size = function () {
      //Informa o tamanho da pilha
      return items.length;
    };

    this.print = function () {
      //Retorna a pilha
      return items.toString();
    };
  }
}

const stack = new Stack();

stack.push(2);
console.log(stack.print());
stack.pop();
stack.push(2);
console.log(stack.print());
stack.peek();
console.log(stack.print());
console.log(stack.isEmpty());
stack.clear();
console.log(stack.print());
