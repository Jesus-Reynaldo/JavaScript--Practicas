function suma(a, b) {
  return a + b;
}
function multiplica(a, b) {
  return a * b;
}
function eleva(a, b) {
  return a ** b;
}
function factorial(a) {
  let factor = 1;
  for (let i = 1; i <= a; i++) {
    factor *= i;
  }
  return factor;
}
// Antes de ES6
module.exports = {
  suma,
  eleva,
  factorial,
  multiplica,
};
