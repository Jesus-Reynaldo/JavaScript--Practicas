// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 1, 2, 5, "hola", { id: 5 }, { id: 5 }];
console.log({ id: 5 } == { id: 5 });
const miSet = new Set(array);
console.log(array); //conjunto ordenado de valores y objetos
console.log(miSet); //conjunto no ordenado de valores unicos o elementos unicos
//La ventaja es que no va ver valores duplicados

// .add() añadir valores
miSet.add(9);
console.log(miSet);
miSet.add(4);
console.log(miSet);

// .delete() eliminar elementos

miSet.delete("hola");
console.log(miSet);

// .clear() elimina todos los valores del Set
// miSet.clear()
// console.log(miSet)

// .has() para ver si contiene un elemento
console.log(array.includes(4)); //esto se utiliza en array
console.log(miSet.has(4)); //esto se utiliza en set

// .size para el tamaño del set
console.log(miSet.size);

// Iteracion en Sets
miSet.forEach((valor) => {
  console.log(valor);
});

const it_miset = miSet.values();
console.log(it_miset);

const ar_miSet = [...miSet];
console.log(ar_miSet[1]);
