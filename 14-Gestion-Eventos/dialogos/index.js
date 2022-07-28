const boton = document.querySelector("#btn");
// console.log(boton)
boton.addEventListener("click", () => {
  // alert("Se ha hecho click");
  // confirm("¿Esta de Acuerdo?") && console.log("Ok!");
  // confirm("¿Esta de Acuerdo?") ? console.log("Ok!") : console.log("No!");
  const respuesta = confirm("¿Seguro?");
  respuesta
    ? console.log("Estas de Acuerdo")
    : console.log("No estas de Acuerdo");
});

const botonInfo = document.querySelector("#info");
botonInfo.addEventListener("click", () => {
  const nombre = prompt("¿Cuál es tu nombre?");
  nombre
    ? console.log(`Tu nombre es ${nombre}`)
    : console.log("No has introducido nada");
});
const lista = [
  {
    nombre: "Gorka",
    edad: 34,
  },
  {
    nombre: "Jesus",
    edad: 28,
  },
  {
    nombre: "Reynaldo",
    edad: 25,
  },
];
// console.log(lista);
console.table(lista);
