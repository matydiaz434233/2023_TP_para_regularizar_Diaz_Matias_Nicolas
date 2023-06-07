console.log("registro.js   CARGADO");
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Objeto con los datos a enviar
    var data = {
      username: username,
      password: password,
    };

    // Opciones para la solicitud Fetch
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // URL a la que se enviará la solicitud Fetch
    var url = "/registro";

    // Realizar la solicitud Fetch
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data); // Aquí puedes manejar la respuesta del servidor
      })
      .catch(function (error) {
        console.log(error); // Aquí puedes manejar cualquier error ocurrido durante la solicitud
      });
  });
