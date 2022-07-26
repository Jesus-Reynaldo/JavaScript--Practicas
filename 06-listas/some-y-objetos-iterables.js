// Some
const array = [1, 2, 3, 4, 5, 785, -36, 96, -3, 5];

const result = array.some((valor) => valor < 5);
console.log(result);

const existe = array.some((valor) => valor === 50);
console.log(existe);

const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucia", edad: 23 },
  { nombre: "Amaia", edad: 29 },
];

const existeMiguel = listaObjetos.some(
  (persona) => persona.nombre === "Miguel"
);
console.log(existeMiguel);

// Como obtener una lista apartir de un objeto iterable
const str = "Hola soy Jesus";
console.log(str[5]);
const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "Hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);
