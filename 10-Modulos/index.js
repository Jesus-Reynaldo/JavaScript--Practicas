// Formas de importar / exportar modulos
//1. CommonJS - require
//2. Importar ES6 - import

// importar de forma 1.
// const moduloMatematicas = require("./modulos/matematicas");
// const { factorial, suma } = moduloMatematicas;
const { factorial, suma } = require("./modulos/matematicas");

const fact = factorial(5);
console.log(fact);

const sum = suma(12, 90);
console.log(sum);
