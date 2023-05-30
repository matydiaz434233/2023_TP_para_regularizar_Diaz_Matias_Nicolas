import express from "express";
import path from "path";
import { fileURLToPath } from "url";
//import handler from './handlerRequest.js';

const rutas = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
rutas.use(express.static(path.join(__dirname, "modulos")));
rutas.use(express.static(path.join(__dirname, "login")));

// borrar proximas 3 lineas
rutas.use(express.static(path.join(__dirname, "vistas")));
rutas.use(express.static(path.join(__dirname, "vistas/404")));
rutas.use(express.static(path.join(__dirname, "404")));

rutas.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/generadorCrud.html"));
});

rutas.get("/vistas/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/login.html"));
});

rutas.get("/vistas/registro.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/registro.html"));
});



// Ruta para manejar errores 404
rutas.get("*", (req, res) => {
  //res.sendFile(path.join(__dirname, "../vistas/404/error.html"));
  res.status(404).render("../vistas/404/error.pug");
});



//METODOS POST

rutas.post("/login/registro.html", (req, res) => {
  res.redirect("../vistas/generadorCrud.html");
});




export default rutas;

//******************** */
