class Persona {
  // Private -> # los atributos privado solo se acceder desde dentro de la clase
  // Protected -> _ mientras el protegido dentro de la clase y desde clases heredadas
  #nombre;
  #edad;
  _isDeveloper = true;
  constructor(nom, edad) {
    this.#nombre = nom;
    this.#edad = edad;
  }
  saludo() {
    console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años.`);
  }
  getNombre() {
    return this.#nombre;
  }
  getEdad() {
    return this.#edad;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  setEdad(edad) {
    this.#edad = edad;
  }
}

const persona = new Persona("Reynaldo", 25);
console.log(persona);
console.log(persona.nombre);
persona.saludo();

// Getter -> metodos que nos permiten obtener atributos/metodos privados o protegidos
// Setter -> metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
console.log(persona.getNombre());
console.log(persona.getEdad());
persona.setNombre("Jesus");
persona.setEdad(28);
console.log(persona.getNombre());
console.log(persona.getEdad());
