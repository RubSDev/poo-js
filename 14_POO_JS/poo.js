/*

Sobre carga por subtipos
Un tipo de dato que viene de otro y aun asi lo puede procesar

*/

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

class Programmer extends Person {
  constructor(language, name, lastname) {
    super(name, lastname);
    this.language = language;
  }
}

const john = new Person("John", "Ray");
const joe = new Programmer("Javascript", "Joe", "McMillan");

console.log(john);
console.log(joe);

function writeFullName(p) {
  console.log(p.name + " " + p.lastname);
}

writeFullName(john);
writeFullName(joe);
