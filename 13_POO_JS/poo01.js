/* Sobrecarga */

function countItems(x) {
  return x.length;
}

console.log(countItems("Hola Mundo"));

function countItems2(x) {
  return x.toString().length;
}

console.log(countItems2(1000));

function sum(x = 0, y = 0, z = 0) {
  return x + y + z;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30));

function Stack() {
  this.items = [];

  this.push = function (item) {
    this.items.push(item);
  };
}

const stack = new Stack();
stack.push("Dadadda");

const stack2 = new Stack();
stack2.push(30);

console.log(stack);
console.log(stack2);
