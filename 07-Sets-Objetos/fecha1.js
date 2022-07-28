// Trabajando con Fechas
const fecha = new Date();

console.log(fecha);

// los meses inicializan en 0
const fecha2 = new Date(2024, 11, 6);
console.log(fecha2);

// se puede denifir en milis segundos
const fecha3 = new Date(-1000000000000);
console.log(fecha3);
// se puede definir mediante un string
const fecha4 = new Date("January 16,1994 20:30:15");
console.log(fecha4);

//Comparar si una fecha es posterior a otra fecha
console.log(fecha > fecha4);
console.log(fecha < fecha4);
const fecha5 = new Date(2024, 11, 6);
console.log(fecha5 === fecha2); //Error no se puede comparar fechas de esta manera se debe convertir a milissegundos
console.log(fecha5.getTime() === fecha2.getTime());

// Obtener el dia .getDate()
console.log(fecha2.getDate());
// Obtener el mes .getMonth() recordando que los meses comienza en cero
console.log(fecha2.getMonth() + 1);
// Obtener el año .getFullYear()
console.log(fecha2.getFullYear());

// Truco para trabajar en front se utiliza .toLocalDateString()
console.log(fecha.toLocaleDateString("es-GB"));
