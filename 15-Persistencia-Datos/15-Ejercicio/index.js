const nombre = "Jesus";
const apellido = "Reynaldo";
const persona = { nombre: nombre, apellido: apellido };
// sessionStorage.setItem("persona", JSON.stringify(persona));
localStorage.setItem("persona", JSON.stringify(persona));
document.cookie = "nombreCookie=EstoExpiraEnDosMinutos";
document.cookie =
  "nombreCookie=EstoExpiraEnDosMinutos; expires=" +
  new Date(2022, 6, 28, 13, 05, 0).toUTCString();
console.log(document.cookie);
