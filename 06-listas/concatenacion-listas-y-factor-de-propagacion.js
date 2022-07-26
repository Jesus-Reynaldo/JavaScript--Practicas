// como unir dos listas .concat(lista2)
const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", 8, true, undefined];

console.log(lista1.concat(lista2)); //no muta los valores de la lista1
console.log(lista1);
const lista3 = lista1.concat(lista2);
console.log(lista3);

// Como unir dos lista con el factor de propagacion
// factor de propagacion ... antes de una lista, esto hace que cree valores por serparado
console.log(...lista3);
const lista4 = [...lista3, 5, "Como", { id: 56 }];
console.log(lista4);
const lista5 = [...lista1, ...lista2];
console.log(lista5);
// ERROR!! Mal entendido el concepto del factor de propagacion
const lista6 = [lista1, lista2];
console.log(lista6);
