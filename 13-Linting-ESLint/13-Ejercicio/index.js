let nombre = "Jesus";
let apellidos = "Reynaldo";
let estudiante = nombre.concat("", apellidos);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let numeroLetras = estudiante.length;
let primeraLetra = estudiante[estudiante.indexOf(nombre)];
let ultimaLetra = estudiante[estudiante.lastIndexOf(apellidos)];

let elimarEspacio = estudiante.replace(/ /g, "");
let contineNombre = estudiante.includes(nombre);
console.log(contineNombre);
