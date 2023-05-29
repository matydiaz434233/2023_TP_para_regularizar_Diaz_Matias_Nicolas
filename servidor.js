import express from "express";
import path from "path";
const myapp = express();
//import sequelize from "./modulos/conexion";
import rutas from "./modulos/rutas.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

myapp.use(rutas);
myapp.use(express.static(path.join(__dirname,"modulos")));

myapp.listen(2023, () => {
  console.log("Servidor corriendo en el puerto 2023");
});
//conecto mi base de datos
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("conexion exitosa");
//   })
//   .catch((err) => {
//     console.log("error en la conexion", err);
//   });
