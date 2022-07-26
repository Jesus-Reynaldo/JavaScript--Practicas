// Como obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(5, 10);
console.log(slice_str);
let substring_str = str.substring(5, 10);
console.log(substring_str);
let substr_str = str.substr(5, 10);
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es jesus ";
console.log(cadena);
console.log(cadena.replace("jesus", "reynaldo"));

let texto_largo =
  "Tengo una gallina pinta, pipiripinta, pipirialegre y gorda, que tiene tres pollitos pintos, pipiripintos, pipirialegres y gordos. Si la gallina no hubiera sido pinta pipiripinta, pipirialegre y gorda; los pollitos no hubieran sido pintos, pipiripintos, pipirialegres y gordos.";
//Solo reemplaza la primera instancia
console.log(texto_largo.replace("pinta", "cerca"));

// Reemplaza todos las intancias, al utilizar la expresion regular /g(global), reemplaza todas las instancias
console.log(texto_largo.replace(/pinta/g, "cinco"));
