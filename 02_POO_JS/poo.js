/*PROPIEDADES*/

const user = {
  name: "ryan", // propiedades
  lastname: "peres",
  age: 30,

  /*  Method  o Métodos / con funcion(constructores) */
  /*  

P ¿Qué es un método ?
 
R Son las acciones o instrucciones que realiza una clase, es decir, información 
o caracteristicas de una clase

E En una clse persona algunos de sus métodos podrían ser : corre, saltar, caminar, comer.
Acciones y/o instrucciones que puede realizar dicha clase.

*/
  showFullName() {
    return "Ryan Ray blue";
  },
};

console.log(user.showFullName());

/* this */
const userTwo = {
  nameTwo: "Byan", // propiedades
  lastnameTwo: "Contrearas",
  ageTwo: 20,

  /*  Method  o Metodos */
  showFullName() {
    return this.nameTwo + " " + this.lastnameTwo;
  },
};

console.log(userTwo.showFullName());

const account = {};
