const datos_personales = {
  nombre: "Jesus",
  apellido: "Reynaldo",
  edad: 28,
  altura: 1.63,
  eresDesarrollador: true,
};
const { edad } = datos_personales;
console.log(edad);

const amigo = [
  {
    nombre: "Fernando",
    apellido: "Leyton",
    edad: 19,
  },
  {
    nombre: "Gabriel",
    apellido: "Castro",
    edad: 25,
  },
  {
    nombre: "Javier",
    apellido: "Leyton",
    edad: 21,
  },
  {
    nombre: "Manuel",
    apellido: "Jimenes",
    edad: 17,
  },
];
console.log(amigo);
amigo.sort((a, b) => a.edad - b.edad);
console.log(amigo);
