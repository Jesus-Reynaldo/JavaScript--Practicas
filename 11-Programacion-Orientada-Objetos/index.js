// Solo sirve para un solo llamado
const persona = {
  nombre: "Jesus",
  edad: 28,
  isDeveloper: true,
  saludo: function () {
    console.log("Hola");
  },
};
console.log(persona);
persona.saludo();

// Sirve para varios Lamados
const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre,
    edad,
    isDeveloper,
    saludo: function () {
      console.log("Hello");
    },
  };
};
const nueva_persona = creaPersona("Juan", 23, true);
console.log(nueva_persona);
// existe una mejor manera de hacerlo mediante clases
