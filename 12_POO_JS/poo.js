/* 
Herencia

Herencia Jerárquica: una clase sirve como una superclase (clase base) para más de una subclase.
Herencia Múltiple (a través de interfaces): una clase puede tener más de una superclase y heredar características de todas las clases principales.

*/
/*
function Person() {
  this.name = "";
  this.lastName = "";
}

function Programmer() {
  this.name = "";
  this.lastName = "";
  this.lenguage = "";
}
*/
function Person() {
  this.name = "";
  this.lastName = "";
}

function Programmer() {
  this.lenguage = "";
}

Programmer.prototype = new Person();

console.log(Person);
console.log(Programmer);

/* Instancia*/
const programmer = new Programmer();
programmer.name = "Rian";
programmer.lastName = "Rya";
programmer.lenguage = "Javascript";

console.log(programmer);

/* Instancia*/
const person = new Person();
person.name = "Rita";
person.lastName = "Moreno";

console.log(person);
