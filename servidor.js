const express = require("express");
const path = require("path");
const myapp = express();

myapp.listen(2023, () => {
  console.log("Servidor corriendo en el puerto 2023");
  
})
myapp.use(express.static(path.join(__dirname, "public")));
myapp.get("/", (req, res) => {
  res.sendFile(__dirname + "/vistas/generadorCrud.html");
})
