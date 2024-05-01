/* prototype */

function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.displayName = function () {
    return `${this.name} ${this.lastName}`;
  };
}
/* instancias */
const jhon = new Person("Jhon", "McMillan");
jhon.name = "Joe";
jhon.age = 20;
console.log(jhon.displayName());

const mario = new Person("Mario", "Hanz");
mario.age = 22;
console.log(mario.displayName());

const maria = new Person("Maria", "Perez");
maria.age = 32;
console.log(maria.displayName());

const jose = new Person("Jose", "Perez");
console.log(jose.displayName());
/*
jhon.greet = function () {
  return `Hello I am ${this.name}`;
};

console.log(jhon.greet());
*/

Person.prototype.greet = function () {
  return `Hello I am ${this.name}`;
};
Person.prototype.age = 100;

console.log(jhon);
console.log(jhon.greet());
console.log(jhon.age);

console.log(mario);
console.log(mario.greet());
console.log(mario.age);

console.log(maria);
console.log(maria.greet());
console.log(maria.age);

console.log(jose);
console.log(jose.greet());
console.log(jose.age);
