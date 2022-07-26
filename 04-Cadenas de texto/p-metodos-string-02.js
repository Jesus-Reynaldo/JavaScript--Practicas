let input = "eScorPio";
let db = "escorpio";

//toLowerCase - toUpperCase
console.log(input.toUpperCase());
console.log(input.toLowerCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toLowerCase() === db.toLowerCase());

// Formas de concatenar dos caracteres
let str_1 = "Hola soy la primera cadena";
let str_2 = "Y yo soy la segunda cadena";
console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al principio y al final
let str_3 = " hola soy string con espacios al final.   ";
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener un caracter que hay en una cierta posicion
let str_4 = "Hola soy el string numero 4";
console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posicion de una palabra dentro de una cadena de caracters
let str_5 = "Hola soy Jesus y me gusta escuchar musica";
console.log(str_5.indexOf("Jesus")); //nos da la posicion del primer caracter y se escribe mal la palabra nos dara como respues -1
console.log(str_5.indexOf("Jes0s"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Jesus")); // nos devuelve la ultima posicion de la cadena
