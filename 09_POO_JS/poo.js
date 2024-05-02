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

/*Agregación */

const company = {
  name: "Art Tech",
  employees: [],
};

class Employee {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const juan = new Employee("Juan", "Rivas");
const pedro = new Employee("Pedro", "Perez");

company.employees.push(juan);
company.employees.push(pedro);

maria.parent = john;

console.log(juan);
console.log(pedro);
console.log(company);
