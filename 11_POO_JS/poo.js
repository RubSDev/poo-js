/* Encapsulación  

Es el ocultamiento o almacenamiento de los elementos de una clase (métodos y atributos) para evitar cambios imprevistos.
Público. Todos acceden a los datos.
Protegido. Accesible dentro de clases y subclases.
Privado. Solo la misma clase puede acceder a estos datos.

*/
/*
const company = {
    name:"Art Tech",
    employees:[],
    sortEmployyes: function (){}
}
*/

function Company(name) {
  let employees = [];
  this.name = name;
  this.getEmployees = function () {
    return employees;
  };
  this.addEmployee = function (employee) {
    employees.push(employee);
  };
}

const company = new Company("Coca Cola");
const company2 = new Company("Pepsi");

console.log(company);
console.log(company2);

company.addEmployee({ name: "Kevin" });
company2.addEmployee({ name: "Luck" });

/* Saldrá indefinido porque esta encapsulado
console.log(employees);
*/
console.log(company.getEmployees());
console.log(company2.getEmployees());
