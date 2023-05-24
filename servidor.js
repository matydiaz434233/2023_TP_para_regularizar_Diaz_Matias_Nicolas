const express = require("express");
const path = require("path");
const myapp = express();

myapp.listen(2023, () => {
  console.log("Servidor corriendo en el puerto 2023");
});
myapp.use(express.static(path.join(__dirname, "public")));
myapp.get("/", (req, res) => {
  res.sendFile(__dirname + "/vistas/generadorCrud.html");
});
myapp.use(express.static(path.join(__dirname, "login")));

myapp.get("/login/login.html", (req, res) => {
  res.sendFile(__dirname + "/login/login.html");
});

myapp.get("/login/registro.html", (req, res) => {
  res.sendFile(__dirname + "/login/registro.html");
});

myapp.post("/login/registro.html", (req, res) => {
  res.redirect("/vistas/generadorCrud.html");
});
