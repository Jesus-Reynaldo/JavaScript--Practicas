const persona = {
  nombre: "Jesus",
  edad: 28,
};
console.log(persona);
function obtenerDobleEdad(edad) {
  return 2 * edad;
}
const dobleEdad = obtenerDobleEdad(persona.edad);
console.log(dobleEdad);
function obtenerArray(edad) {
  let arrayNums = [];

  for (let i = 0; i < 10; i++) {
    const numero = persona.edad + i;
    console.log(numero);
    arrayNums = [...arrayNums, numero];
  }
}
const array = obtenerArray(persona.edad);
console.log(arrayNums);
