/*Constructor*/

/*Oject es un constructor que ya te ofrese javascript */
const person = new Object();
console.log(person);

const number = new Object(12);
console.log(number);

const numberExpEj = new Object(3 * 2);
console.log(numberExpEj);

const stringExampEj = new Object("Hello World");
stringExampEj.name = "Special String";
stringExampEj.test = function () {
  return this + "test";
};
console.log(stringExampEj);
console.log(stringExampEj.name);
console.log(stringExampEj.test());

/*
const person2 = {};
console.log(person2.constructor === Object);
*/

const user = {
  name: "Ryan",
  lastname: "Ray",
  age: 30,
  showName() {
    return this.name;
  },
};

Object.keys(user);
/*Metodos del objeto Object para acceder a valores y propiedadesdel*/
console.log(Object.keys(user));
console.log(Object.values(user));
