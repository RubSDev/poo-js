/* Class */
/*
Esta funcion es lo mismo que la clase de abajo
function Person() {
  this.name = "";
  this.lastName = "";
}
*/

/*
const user0 = {
    name:"",
    lastname:"",
    greet(){
       
    }
}

*/

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  greet() {
    return `Hello I am ${this.name} ${this.lastName}`;
  }
}
/*intancia*/
const user = new Person("Rian", "Ray");
const user2 = new Person("Joe", "McMillan");

console.log(user, user.greet());
console.log(user2, user2.greet());

/*FUNCIONES ANONIMAS*/
/*Son clases*/

const PersonFunAnonima = class {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  greet() {
    return `Hello I am ${this.name} ${this.lastName}`;
  }
};

console.log(typeof Person);
console.log(typeof PersonFunAnonima);

console.log(Person.prototype);
console.log(PersonFunAnonima.prototype);
