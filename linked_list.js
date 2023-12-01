//Listas ligadas | Ponteiros | Ex.: Trem

function linkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    //Insere um elemento ao final da lista.
    var node = new Node(element),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }
    length++;
  };

  this.insert = function (position, element) {
    //Adiciona um elemento em uma posição específica.
  };

  this.removeAt = function (position) {
    //Remove o elemento de uma posição específica.
  };

  this.remove = function (element) {
    //Remove o elemento element.
  };

  this.indexOf = function (element) {
    //Retorna a posição do elemento.
  };

  this.isEmpty = function () {
    //Retorna se a lista está vazia ou não.
  };

  this.toString = function () {
    //Implementa a conversão para string.
    var current = head;
    string = "";

    while (current) {
      string += current.element + " ";
      current = current.next;

      return string;
    }
  };

  this.print = function () {
    //Imprime no console.
    console.log(this.toString());
  };
}
