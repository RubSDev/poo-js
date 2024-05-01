/*Asociación */

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const john = new Person("John", "Ray");
const maria = new Person("Maria", "Perez");

maria.parent = john;

console.log(john);
console.log(maria);
