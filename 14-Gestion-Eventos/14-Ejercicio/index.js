const boton = document.querySelector("#btn");
boton.addEventListener("click", () => {
  alert("click en el botón");
});
$(() => {
  $("#btn-jquery").click(() => {
    console.log("Hola, estoy utilizando jQuery");
  });
});
