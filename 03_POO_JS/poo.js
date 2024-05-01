const user = {
  name: "Ryan", // propiedades
  lastnameTwo: "Perez",
  age: 30,
  /*Método */
  showFullName() {
    return `${this.name} ${this.lastname}`;
  },
};
/*
const user2 = {
    name: "Joe", // propiedades
    lastnameTwo: "McMillan",
    age: 30,
    showFullName() {
      return `${this.name} ${this.lastname}`;
    }
  }
  const user3 = {
    name: "Robert", // propiedades
    lastnameTwo: "Howe",
    age: 30,
    showFullName() {
      return `${this.name} ${this.lastname}`;
    }
  }
*/

function Person() {
  this.name = "";
  this.lastname = "";
  this.age = 0;
  /*Constructor 
Un Constructor es una funcion (es una especie de plantilla reutilisable) que nos permite crear objetos con propiedades y metodos
*/
  this.showFullName = function () {
    return `${this.name} ${this.lastname}`;
  };
}

const user2 = new Person();
user2.name = "Kevin";
user2.lastname = "McMillan";
user2.age = 25;
console.log(user2.showFullName());

const user3 = new Person();
user3.name = "Cameron";
user3.lastname = "Hawe";
console.log(user3.showFullName());

const user4 = new Person();
const user5 = new Person();

console.log(user4, user5);
console.log(user4);
console.log(user5);
