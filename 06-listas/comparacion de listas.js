// como podemos comparar listas
// .every()
const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

const resultado = array.every((valor) => {
  // if(typeof valor ==="number"){
  if (valor > 0) {
    return true;
  } else {
    return false;
  }
});
console.log(resultado);
// Forma sencilla
const resultado_s = array.every((valor) => valor > 0);

// comparacion de dos listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];
// Las listas no se pueden comparar de esra manera
console.log(ar1 === ar2);
// Funcion de comparacion de Listas
const compararArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  const respuesta = array1.every((valor, i) => valor === array2[i]);
  return respuesta;
};
console.log(compararArrays(ar1, ar2));
const ar3 = [1, 2, 3, 6, 8];
console.log(compararArrays(ar1, ar3));
