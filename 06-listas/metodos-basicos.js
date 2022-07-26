// como trabajar con listas
let var1 = { id: false };
let array = [1, "Hola", true, { id: 5 }, null, undefined, var1];
console.log(array);

// aceder a los valores de un array a traves de su posicion
// array[indice] =>0,1,2,3,4,5,.....
console.log(array[6]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
// metodo para introducir nuevos varoles en un array
// .push() .unshift() =>Mutan el valor de nuestra array
// valores al final =>
array.push("Final", 45, 100, false);
console.log(array);
// valores al principios
array.unshift("inicio", 87, 99);
console.log(array);

// Metodo para eliminar valores en nuestro array
// pop() shift() =>Mutan el valor del array

const array2 = [1, 3, "hola", false];
// Valores al final pop()
array2.pop();
console.log(array2);

// Valores al principio del array .shift()
array2.shift();
console.log(array2);

// Metodo para eliminar, modificar o añadir valores en nuestro array
// .splice(x,y,z)
const array3 = [1, 2, 3, 4, 5, 6];
// Elimiar valores .splice(indice, numeroValoresAEliminar)
array3.splice(2, 0);
console.log(array3);
array3.splice(2, 1);
console.log(array3);
// Añadir valores .splice(indice,0,valores)
array3.splice(2, 0, "hola", "cinco");
console.log(array3);
// Modificar valores .splice(indice,1,valores)
array3.splice(2, 1, 3);
console.log(array3);
