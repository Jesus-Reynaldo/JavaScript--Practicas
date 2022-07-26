class Estudiante {
  _nombre;
  _asignatura;
  constructor(nombre) {
    this._nombre = nombre;
    this._asignatura = ["JavaScript,HTML,CSS"];
  }
  obtenerDatos() {
    console.log(`Estudiante: ${this._nombre}`);
    console.log(`Asignaturas: ${this._asignatura}`);
  }
}
const estudiante = new Estudiante("Jesus");
estudiante.obtenerDatos();
