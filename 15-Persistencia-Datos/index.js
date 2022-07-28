/* para Obtener informacion
localStorage.getItem("Jesus")*/
/* para Enviar
localStorage.setItem("nombre", "Jesus");
localStorage.setItem("nombre", "Reynaldo");
*/
/*Para Obtener informacion*/
// console.log(localStorage.getItem("nombre"));
// para guardar un array o objeto primero se debe convertir con el comando JSON.stringify(array) que comvierte el objeto o array en un string
localStorage.setItem(
  "persona",
  JSON.stringify({ nombre: "Jesus Reynaldo", edad: 28 })
);
// Para recuperar un array o objeto con el comando JSON.parse(array) que comvierte un string convertido por el metodo stringify a un objeto o un array
console.log(JSON.parse(localStorage.getItem("persona")));
// Eliminar un item de localStorage con el metodo localStorage.removerItem(key)
localStorage.removeItem("nombre");

/********Session Storage solo en una pestaña y cuando se cierra se elimina*/
sessionStorage.setItem("nombre-session", "Jesus");
console.log(sessionStorage.getItem("nombre-session"));

/***Cookies */
// Crear
document.cookie = "nombreCookie=JesusReynaldo";
// Dar una caducidad
document.cookie =
  "nombreCookie=JesusReynaldo; expires=" +
  new Date(2022, 6, 28, 12, 40).toUTCString();
console.log(document.cookie);
