function* generaID() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
      return id;
    }
    yield id; //es como un stop. esperando hasta que se vuelva a llamar
  }
}

const gen = generaID();
console.log(gen);
console.log(gen.next()); //esta es la forma de llamar una a la funcion
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
