class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.age = null;
  }
}

class Programmer extends Person {
  constructor(lenguage, name, lastName) {
    super(name, lastName);
    this.lenguage = lenguage;
  }
}

const person = new Person("Maria", "Perez");

const programmer = new Programmer("Joe", "McMillan", "Python");

console.log(person);
console.log(programmer);
