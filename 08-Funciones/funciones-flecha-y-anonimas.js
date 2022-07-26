// Funciones tipo flecha - funciones anónimas

const array = [1, 5, 6, 2, 7, 12, 8, 92];

// const array2 = array.map(function (valor){
//   return valor*2
// })
const array2 = array.map((valor) => valor * 2);

console.log(array2);

// const dobleDelValor=valor=>{
//   return valor*2;
// }
const dobleDelValor = (valor) => valor * 2; //solo se puede acceder despues que sean inicializadas
// (valor)=>valor*2 esta es una funcion anonima
const array3 = array.map(dobleDelValor);
console.log(array3);
