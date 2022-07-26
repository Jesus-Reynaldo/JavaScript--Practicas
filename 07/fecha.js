const fecha = new Date();
const fecha_nacimiento = new Date(1994, 0, 16);

const comprobar =
  fecha.getTime() > fecha_nacimiento.getDate() ? "Es más tarde" : "No es Tarde";
console.log(comprobar);

const dia = fecha_nacimiento.getDate();
console.log(dia);
const mes = fecha_nacimiento.getMonth() + 1;
console.log(mes);
const año = fecha_nacimiento.getFullYear();
console.log(año);
