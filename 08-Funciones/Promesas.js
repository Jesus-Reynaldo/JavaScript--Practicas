// Funciones asincronas
function miAsinc() {
  // Hace una llamada a una base de datos externa
  // Puede darnos algun error
}
// una promesa
const miPromesa = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);
  // Sie esta todo correcto
  if (i != 0) {
    resolve();
  } else {
    reject();
  }
});
// como se ejecuta una promesa
miPromesa
  .then(() => console.log("Se ha ejecutado de forma correcta"))
  .catch(() => console.log("ERROR")) //Gestiona el error de la miPromesa
  .finally(() => console.log("Yo me ejecuto simepre")); //Siempre se ejecuta independiente al resultado
