import express from "express";
import path from "path";
import { fileURLToPath } from "url";
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

export default rutas;

//******************** */
