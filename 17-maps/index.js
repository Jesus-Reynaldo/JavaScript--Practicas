let marker, map;
function initMap() {
  // console.log("Inicializando mapa");
  const posicion = {
    lat: -25.344,
    lng: 131.031,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });
  marker = new google.maps.Marker({
    posicion: posicion,
    map,
    title: "Posicion Inicial",
  });
  //Obtener la geolocalizacion
  // marker.setPosition({ lat, lng });
  geoPosiciona();
}
function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    // const watchPos = geoLoc.watchPosition(
    //   (posicion) => {
    //     console.log(posicion.coords);
    //   },
    //   (error) => {
    //     console.error(error);
    //   },
    //   { timeout: 60000 }
    // );
    const options = { timeout: 60000 };
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
  } else {
    alert("Tu navegador no admite la geolocalización");
  }
}
function centraMapa(posicion) {
  const nuevaPos = {
    lat: posicion.coords.latitude,
    lng: posicion.coords.longitude,
  };
  console.log(nuevaPos);
  marker.setPosition(nuevaPos);
  map.setCenter(nuevaPos);
}
function onError(error) {
  console.log("Se ha producido un error y lo hemos gestionada");
  console.error(error);
}
