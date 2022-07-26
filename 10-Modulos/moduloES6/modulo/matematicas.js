export function suma(a, b) {
  return a + b;
}
export function multiplica(a, b) {
  return a * b;
}
export function eleva(a, b) {
  return a ** b;
}
export function factorial(a) {
  let factor = 1;
  for (let i = 1; i <= a; i++) {
    factor *= i;
  }
  return factor;
}
