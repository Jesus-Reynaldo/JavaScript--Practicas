// Qué son las funciones, cómo se declaran y cómo se utilizan
const nom = "Jesus";

// saludar("Miguel")
saludar(nom);

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

//
let nombre_2 = "Juan";
console.log(nombre_2);
despedir(nombre_2);
function despedir(nombre) {
  nombre = "Diego";
  console.log(`Adiós ${nombre}`);
}

//
let persona = { nombre: "Juan", apellido: "Gonzales" };
console.log(persona);
saludarPersona(persona);
function saludarPersona(objeto) {
  objeto.apellido = "Villar";
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}
console.log(persona);

saludar();

// Parametro obsionales o parametros por defecto

function imprimeNumero(numero = 7) {
  console.log(numero);
}
imprimeNumero();

// Definir funcion con unos parametros indertermidados con el factor de propagacion

function imprimir(...parametros) {
  console.log(parametros);
}
imprimir(1, 3, 9, 2, "Hola", { id: 9 });
//
function suma(...numeros) {
  return numeros.reduce((a, b) => a + b);
}
const s = suma(1, 2, 3, 4, 9, 15);
console.log(s);
//////
let variable = "hola";

function multiplicar(a = 0, b = 0) {
  console.log(variable);
  let variable_interna = "adiós";
  console.log(variable_interna);
  return a * b;
}

console.log(multiplicar(4, 9));
