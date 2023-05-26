const express = require("express");
const path = require("path");
const myapp = express();
const sequelize = require("./modulos/conexion");  // Importa el modulo de conexion

myapp.listen(2023, () => {
  console.log("Servidor corriendo en el puerto 2023");
});
myapp.use(express.static(path.join(__dirname, "public")));
myapp.get("/", (req, res) => {
  res.sendFile(__dirname + "/vistas/generadorCrud.html");
});
myapp.use(express.static(path.join(__dirname, "login")));

myapp.get("/vistas/login.html", (req, res) => {
  res.sendFile(__dirname + "/vistas/login.html");
});

myapp.get("/vistas/registro.html", (req, res) => {
  res.sendFile(__dirname + "/vistas/registro.html");
});

myapp.post("/login/registro.html", (req, res) => {
  res.redirect("/vistas/generadorCrud.html");
});

//conecto mi base de datos
sequelize.authenticate().then(() => {
  console.log('conexion exitosa');
}) .catch(err => {
  console.log('error en la conexion', err);
})