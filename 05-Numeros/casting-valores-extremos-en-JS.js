// Operador .valueOf() para obtener valores numero apartir de literales
let a = 2;
let b = new Number(3); //casting

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf()); // lo realiza de manera interna
console.log(b.valueOf()); //para obtener el valor primitivo
let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());
// NaN (Not a Number)- Infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor); // nos da un valor infinito, es cuando dividimos entre cero
let divisor_2 = null; // nos da un valor infinito
console.log(numerador / divisor_2);
// Como convertir lis string a valores numericos con Number, parseInt y parseFloat
let numero = "5.89";
let numero2 = 17.2;
console.log(typeof numero);
console.log(numero + numero2); //erro de concepto
console.log(typeof Number(numero));
console.log(Number(numero) + numero2);
console.log(typeof parseInt(numero));
console.log(parseInt(numero));
console.log(typeof parseFloat(numero));
console.log(parseFloat(numero));

let numero3 = 4;
console.log(parseInt(numero3));
console.log(typeof parseInt(numero3));
console.log(parseFloat(numero3));
console.log(typeof parseFloat(numero3));

// Numeros hexadecimales (base 16)
let numeroHex = "0x3a5b7";
console.log(parseInt(numeroHex, 16));

// Obtener los valores maximo y minimos en Javasript
let minPrecision = Number.EPSILON;
console.log(minPrecision);
let min_valor_JS = Number.MIN_VALUE;
console.log(min_valor_JS);
let max_valor_JS = Number.MAX_VALUE;
console.log(max_valor_JS);
console.log(2 ** 1023);
