function verdadero() {
  return true;
}

async function funcionPromesa() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}
funcionPromesa().then().catch();

function* generar() {
  let i = 2;
  while (true) {
    i += 2;
    if (i == 10) {
      return i;
    }
    yield i;
  }
}
const generarPar = generar();
console.log(generarPar.next().value);
console.log(generarPar.next().value);
console.log(generarPar.next().value);
console.log(generarPar.next().value);
