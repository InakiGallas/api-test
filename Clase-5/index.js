import express from "express";
import { createServer } from "http";

const server = express();
const PORT = 8080;
// Middleware para parsear el cuerpo de la peticion
server.use(express.json()); // Para parsear el cuerpo de la peticion en formato JSON

//EndPoints --> Punto de Entrada
//VERBOS: URL + Metodo HTTP (GET, POST, PUT, DELETE)
//PUT -> Actualizar datos
//DELETE -> Eliminar datos
//PATCH -> Actualizar parcialmente datos

const films = [
  { id: 1, title: "El Padrino", year: 1972 },
  { id: 2, title: "El Señor de los Anillos", year: 2001 },
  { id: 3, title: "Pulp Fiction", year: 1994 },
  { id: 4, title: "Forrest Gump", year: 1994 },
  { id: 5, title: "La Lista de Schindler", year: 1993 },
];

//GET -> Obtener datos
server.get("/", (req, res) => {
  res.send("Ruta Base"); // Respuesta al cliente
});


//GET -> Obtener datos todas las peliculas
server.get("/films", (req, res) => {
    res.send(films); // Respuesta al cliente
  });

//GET -> Obtener datos  de una pelicula
//:id -> Parametro de ruta
server.get("/films/:id", (req, res) => {
    const { id } = req.params; // Obtener el id de la pelicula
    console.log(id); // Mostrar el id en la consola
    const element = films.find((e) => e.id == id); // Buscar la pelicula por id
    if (!element) { // Si no existe la pelicula
       res.status(404).send("No se encontró la película"); // Respuesta al cliente
    }
    res.send(element); // Respuesta al cliente
  });

//POST -> Crear datos
server.post("/films", (req, res) => {
  const newFilm = req.body; // Obtener el cuerpo de la peticion
  films.push(newFilm); // Agregar la nueva pelicula al array  
  res.send(newFilm); // Respuesta al cliente
});

//PUT -> Actualizar datos TOTAL
server.put("/update/all/:id", (req, res) => {
  //Todo lo que viaje por params es un string
  const { id } = req.params; // Obtener el id de la pelicula
  const data = req.body; // Obtener el cuerpo de la peticion
  const index = films.findIndex((e) => e.id == id); // Buscar la pelicula por id
  console.log("index:", index); // Mostrar el index en la consola
  films.splice(index, 1, data); // Actualizar la pelicula en el array
  if (index == -1) { // Si no existe la pelicula
    res.status(404).send("No se encontró la película"); // Respuesta al cliente
  }
  res.send(data); // Respuesta al cliente
})
 //PATCH -> Actualizar parcialmente datos
server.patch("/update/:id", (req, res) => {
  const { id } = req.params; // Obtener el id de la pelicula
  const data = req.body; // Obtener el cuerpo de la peticion
  const index = films.findIndex((e) => e.id == id); // Buscar la pelicula por id
  if (index == -1) { // Si no existe la pelicula
    res.status(404).send("No se encontró la película"); // Respuesta al cliente
  }else {
    const newFilm = { ...films[index], ...data }; // Actualizar la pelicula en el array
    films.splice(index, 1, newFilm); // Actualizar la pelicula en el array
    res.send(newFilm); // Respuesta al cliente
  }
})
//DELETE -> Eliminar datos
server.delete("/delete/:id", (req, res) => {
  const { id } = req.params; // Obtener el id de la pelicula
  const index = films.findIndex((e) => e.id == id); // Buscar la pelicula por id
  if (index == "-1") { // Si no existe la pelicula
    res.status(404).send("No se encontró la película"); // Respuesta al cliente
  }else {
    films.splice(index, 1); // Eliminar la pelicula del array
    res.status(200).send("La Pelicula fue eliminada correctamente"); // Respuesta al cliente
  }
 
  
})


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
