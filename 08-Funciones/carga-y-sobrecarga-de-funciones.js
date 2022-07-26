// Carga y sobrecarga de funciones
function saludar() {
  hola();
}

function hola() {
  console.log("Hola! Soy la función hola()");
}

saludar();

/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()

// stack overflow (sobre carga de funciones)
// function recursivo() {
//     recursivo()
// }

// recursivo()
