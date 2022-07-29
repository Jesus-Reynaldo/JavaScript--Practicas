/**Arastar y soltar */
const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
parrafos.forEach((parrafo) => {
  // cuando se comienza arrastar se evento de dragstart
  parrafo.addEventListener("dragstart", (event) => {
    console.log("Inicio de arrastre");
    console.log(`Estoy arrastrando el parrafo: ${parrafo.innerText}`);
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
    const elemento_fantasma = document.querySelector(".imagen-fantasma");
    event.dataTransfer.setDragImage(elemento_fantasma, 0, 0); //crea una clase en la etiqueta
  });
  // Para el final de arraste se utiliza el evento dragend
  parrafo.addEventListener("dragend", () => {
    console.log("He terminado de arrastar");
    parrafo.classList.remove("dragging"); //elimina una clase en la etiqueta
  });
});
secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move"; //por edefecto es el copy
    // console.log("Drag Over");
  });
  // Cuando se suelta el elemento
  seccion.addEventListener("drop", (event) => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id");
    // console.log("Parrafo id:", id_parrafo);
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});
//Ejercicio Practico
const papelera = document.querySelector(".papelera");
papelera.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy"; //por edefecto es el copy
  // console.log("Drag Over");
});
// Cuando se suelta el elemento
papelera.addEventListener("drop", (event) => {
  console.log("Drop");
  const id_parrafo = event.dataTransfer.getData("id");
  // console.log("Parrafo id:", id_parrafo);
  document.getElementById(id_parrafo).remove();
});
