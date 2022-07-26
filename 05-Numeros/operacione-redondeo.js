// Operacion arimeticas
let a = 3.5;
let b = 4.8;
// suma(+)
console.log(a + b);
// resta(-)
console.log(a - b);
// multiplicacion(*)
console.log(a * b);
// division(/)
console.log(a / b);

// Representacion de los numeros en cadena de texto
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);
// Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;
console.log(d);
// Sirve para redondear numeros .toFixed(numeroDecimales) pero lo convierte a string
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));
// limita el numero de deciales al valor numeroDecimal
let e = 1839.12665456136;
let f = 1849463913139631;
console.log(e.toFixed(2));
console.log(f.toFixed(2));
// .toPrecision(cifrasSignificativas) hace un redondeo cientifico, limita el numero de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));
// el .toPrecision de la misma manera devuelve un string
console.log(typeof e.toPrecision(7));
