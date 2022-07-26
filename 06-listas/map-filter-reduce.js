// Trabajar con metodos mas avanzados
// .map() .filter() .reduce()

const array = ["La Paz", "Sucre", "Santa Cruz", "Cochabamba"];

const val = array.forEach((v) => {
  console.log(v);
  return 4;
});
console.log(val);

const newArray = array.map((valor, indice) => {
  return `${indice + 1} - ${valor}`;
});
console.log(newArray);

const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucia", edad: 23 },
  { nombre: "Amaia", edad: 29 },
];

const personasMayores = listaObjetos.filter((valor) => {
  return valor.edad > 30 ? true : false;
});
console.log(personasMayores);

// Forma mas simple
const personasMayores_s = listaObjetos.filter((valor) => valor.edad > 30);
console.log(personasMayores_s);

const nuevaLista = listaObjetos.filter((valor) => valor.nombre !== "Miguel");
console.log(nuevaLista);

// Metoso reduce para obtenr un objeto apartir de una listaObjetos
const valores = [3, 56, 23, 5, 90, 100];
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
  console.log(acumulado);
  console.log(cur);
  console.log(i);
  console.log(arrayOriginal);
  return acumulado + cur;
});
console.log(suma);
