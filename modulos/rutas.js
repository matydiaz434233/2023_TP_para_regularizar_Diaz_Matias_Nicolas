import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import handler from './handlerRequest.js';

const rutas = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
rutas.use(express.static(path.join(__dirname, "modulos")));
rutas.use(express.static(path.join(__dirname, "login")));

rutas.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/generadorCrud.html"));
});

rutas.get("/vistas/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/login.html"));
});

rutas.get("/vistas/registro.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/registro.html"));
});

rutas.post("/login/registro.html", (req, res) => {
  res.redirect("../vistas/generadorCrud.html");
});

// Ruta para manejar errores 404
rutas.use((req, res) => {
  handler.error404(req, res);
});

export default rutas;

//******************** */
