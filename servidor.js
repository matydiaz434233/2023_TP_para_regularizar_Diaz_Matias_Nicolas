import express from "express";
import path from "path";
//import sequelize from "sequelize";

//import conexion from "./modulos/conexion.js";
import rutas from "./modulos/rutas.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const myapp = express();
myapp.use(express.static(path.join(__dirname, "modulos")));
myapp.use(express.static(path.join(__dirname, "login")));
myapp.use(express.static(path.join(__dirname, "vistas")));
myapp.use(express.static(path.join(__dirname, "public")));

myapp.set("view engine", "pug");
// Middleware para analizar el cuerpo de la solicitud en formato JSON
myapp.use(express.json());
myapp.use(rutas);

myapp.listen(2023, () => {
  console.log("Servidor corriendo en el puerto http://localhost:2023");
});
