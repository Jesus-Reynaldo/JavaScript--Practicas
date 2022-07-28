// $("h1").hide();
// se utliza una vez que la pagina este cargada por completa
/*$(document).ready(()=>{

})*/
// Forma simplificada
$(() => {
  // selectores:
  // id="el-1" => "#el-1"
  // class="hide-btn" => ".hide-btn"
  $(".hide-btn").click(() => {
    console.log("Ocultando...");
    // $("h1").hide();
    // Para que el cambio no se tan brusco se utilizar el fadeOut en vez de hide
    $("h1").fadeOut();
  });
  $(".show-btn").click(() => {
    // $("h1").show();
    // Para que el cambio no se tan brusco se utilizar el fadeIn en vez de show
    $("h1").fadeIn();
  });
  $("li").click(() => {
    $("h1").css({ color: "red" });
  });
  $("li").dblclick(() => {
    //dblclick: "doble click"
    $("h1").css({ color: "blue" });
  });
  $(".new-element").click(() => {
    //append agrega el elemento al final y prepend agrega el elemento al principio
    $("ul").prepend("<li>New Element</li>");
  });
  $("li").mouseenter((elem) => {
    // es para interactuar con el hover
    elem.target.style.color = "blue";
  });
  $("li").mouseleave((elem) => {
    elem.target.style.color = "black";
  });
});
