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
myapp.use(rutas);

//conecto mi base de datos
// const connectToDatabase = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexión exitosa a la base de datos de generadorcrud');
//   } catch (error) {
//     console.log('Error en la conexión:', error);
//   }
// };

// // Llamar a la función para conectar a la base de datos
// connectToDatabase();
//arranco mi servidor
myapp.listen(2023, () => {
  console.log("Servidor corriendo en el puerto 2023");
});
