const miFuncion = (valor) => {
  if (typeof valor === "number") {
    return valor * 2;
  }
  // return valor;
  throw new Error("El valor debe ser de tipo numero");
};
// const elDoble = miFuncion("a1a")
const numero = "8";
try {
  console.log("Esta ejecutando de manera correcta");
  const doble = miFuncion(numero);
  console.log(doble);
} catch (e) {
  console.log("Error");
  console.error(`El valor de es es: ${e}`);
} finally {
  console.log(
    "Esto se va a ejecutar si se produce un error, si no exte ninguno"
  );
}
// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
