document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
  
    // Enviar el mensaje de autenticación al correo electrónico
    Email.send({
      SecureToken: "tu_token",
      To: email,
      From: "tu_correo@ejemplo.com",
      Subject: "Autenticación de Usuario",
      Body: "Hola " + username + ", tu registro ha sido exitoso. ¡Gracias por registrarte!"
    }).then(
      function(message) {
        alert("Registro exitoso. Se ha enviado un mensaje de autenticación a tu correo electrónico.");
        // Aquí puedes redirigir al usuario a otra página si lo deseas
      }
    );
  });
  