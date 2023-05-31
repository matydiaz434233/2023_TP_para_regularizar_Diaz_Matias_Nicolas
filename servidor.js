import express from "express";
import path from "path";
import conexion from "./modulos/conexion.js";
import rutas from "./modulos/rutas.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const myapp = express();
myapp.use(express.static(path.join(__dirname, "modulos")));
myapp.use(express.static(path.join(__dirname, "login")));
myapp.use(express.static(path.join(__dirname, "vistas")));
myapp.set("view engine", "pug");
myapp.use(rutas);

//conecto mi base de datos
conexion
  .authenticate()
  .then(() => {
    console.log("conexion exitosa a la base de datos de generadorCrud");
  })
  .catch((err) => {
    console.log("error en la conexion", err);
  });

myapp.listen(2023, () => {
  console.log("Servidor corriendo en el puerto 2023");
});
