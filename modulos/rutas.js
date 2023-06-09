import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import handler from "./handlerRequest.js";

const rutas = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

rutas.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/generadorCrud.html"));
});

rutas.get("/vistas/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/login.html"));
});

rutas.get("/vistas/registro.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/registro.html"));
});



//METODOS POST
rutas.post("/generadorCrud", handler.generateCrud);

rutas.post("/registro", handler.registrarUsuario);


// Ruta para manejar errores 404
rutas.get("*", (req, res) => {
  //res.sendFile(path.join(__dirname, "../vistas/404/error.html"));
  res.status(404).render("../vistas/404/error.pug");
});


export default rutas;

//******************** */
