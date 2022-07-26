const compra = ["Limon", "Manzana", "Papa", "Leche", "Cafe"];
compra.push("Aceite de Girasol");
console.log(compra);
compra.pop();
console.log(compra);

const peliculas = [
  {
    titulo: "El sexto sentido",
    director: "M. Night Shyamalan",
    fecha: new Date(2016, 3, 12),
  },
  {
    titulo: "Pulp Fiction",
    director: "Tarantino",
    fecha: new Date(2019, 8, 23),
  },
  {
    titulo: "Todo Sobre Mi Madre",
    director: "Almodobar",
    fecha: new Date(2007, 1, 10),
  },
];
const results_peliculas = peliculas.filter(
  (obj) => obj.fecha > new Date(2010, 1, 1)
);
console.log(results_peliculas);

const directores = peliculas.map((obj) => obj.director);
console.log(directores);

const titulos = peliculas.map((obj) => obj.titulo);
console.log(titulos);

const director_titulo = peliculas.map((obj) =>
  obj.director.concat(" ", obj.titulo)
);
console.log(director_titulo);

const directores_titulos = [...directores, ...titulos];
console.log(directores_titulos);
