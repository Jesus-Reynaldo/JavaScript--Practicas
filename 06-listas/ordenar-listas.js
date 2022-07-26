// .sort()
const array = [8, 6, 3, 2, 7, 4, 0];
console.log(array);
array.sort((a, b) => {
  return a < b ? -1 : 1;
});
console.log(array);
//Ordenarunimamente array numericos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546, 8];
arrayNumerico.sort((a, b) => b - a);
console.log(arrayNumerico);

//Interesante en array de objetos
const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucia", edad: 23 },
  { nombre: "Amaia", edad: 29 },
];

listaObjetos.sort((a, b) => {
  return a.edad < b.edad ? -1 : 1;
});
console.log(listaObjetos);

// Forma mas simple
const listaObjetos_s = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucia", edad: 23 },
  { nombre: "Amaia", edad: 29 },
];
listaObjetos_s.sort((a, b) => a.edad - b.edad);
console.log(listaObjetos_s);
