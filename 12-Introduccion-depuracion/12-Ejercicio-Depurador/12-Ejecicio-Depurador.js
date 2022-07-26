function fibonacci(num) {
  let fibo = [1, 1];
  let numero;
  for (let i = 2; i < num; i++) {
    numero = fibo[i - 1] + fibo[i - 2];
    fibo = [...fibo, numero];
  }
  return fibo;
}
const fibon = fibonacci(6);
console.log(fibon);
