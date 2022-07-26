class Persona {
  _nombre;
  _edad;
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  saludo() {
    console.log(`Hola mi nombre es ${this._nombre}, tengo ${this._edad} años.`);
  }
}
// Inheritance - herencia

class Desarrollador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this.lenguaje = lenguaje;
  }
  saludo() {
    super.saludo();
    console.log(`Y soy desarrollador de ${this.lenguaje}`);
  }
}
const nuevo_dev = new Desarrollador("Jesus", 28, "Javascript");
console.log(nuevo_dev);
nuevo_dev.saludo();

// Polimorfismo => Varias formas
