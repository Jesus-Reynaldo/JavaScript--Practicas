import { suma, eleva } from "./modulo/matematicas.js";
import getAutor, { libro } from "./modulo/literatura.js";
const sum = suma(4, 12);
console.log(sum);
const elev = eleva(2, 21);
console.log(elev);
const autor = getAutor();
console.log(autor);
console.log(libro);
