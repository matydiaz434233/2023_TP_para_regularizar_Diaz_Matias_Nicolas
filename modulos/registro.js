console.log("registro.js CARGADO");
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

    console.log(data);//hasta aca funciona

    fetch("/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del backend
        console.log(data);
      })
      .catch((error) => {
        // Manejar el error
        console.error("error al enviar la solicitud", error);
      });
  });
