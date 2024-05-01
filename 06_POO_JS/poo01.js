const s = new String("Hello world");

String.prototype.concatTest = function () {
  return this + "Test";
};

console.log(s);
console.log("Mi nombre es Ruben".concatTest());
console.log(s.concatTest());
