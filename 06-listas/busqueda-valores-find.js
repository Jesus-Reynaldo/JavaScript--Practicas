// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined];

// Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// la forma ES6 (mas eficinete) es el metodo .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach((valor) => {
  suma += valor;
  console.log(valor);
});
console.log(suma);

// Busque de un valor en una lista
// Quiero encontrar el valor de 90
const variable = array.find((valor) => {
  if (valor === 90) {
    return true;
  }
});
console.log(variable);

const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucia", edad: 23 },
  { nombre: "Amaia", edad: 29 },
];

const objeto = listaObjetos.find((o) => {
  if (o.nombre === "Miguel") {
    return true;
  }
});
console.log(objeto.edad);

// Forma simplificadas
const objeto_s = listaObjetos.find((o) => {
  return o.nombre === "Miguel";
});
// Mas simplificada con desconstrucion de objetos
const { edad } = listaObjetos.find((o) => o.nombre === "Lucia");
console.log(edad);
