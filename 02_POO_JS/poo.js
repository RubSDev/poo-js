/*PROPIEDADES*/

const user = {
  name: "ryan", // propiedades
  lastname: "peres",
  age: 30,

  /*  Method  o Metodos */
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
