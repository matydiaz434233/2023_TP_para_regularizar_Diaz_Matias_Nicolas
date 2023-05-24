// Variables para almacenar los datos de inicio de sesión
var usuariosRegistrados = [
    { usuario: "usuario1", contraseña: "contraseña1" },
    { usuario: "usuario2", contraseña: "contraseña2" },
    { usuario: "usuario3", contraseña: "contraseña3" }
  ];
  
  // Función para validar el formulario de inicio de sesión
  function validarInicioSesion() {
    // Obtener los valores ingresados por el usuario
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
  
    // Validar si los campos están vacíos
    if (usuario === "" || contraseña === "") {
      alert("Por favor, ingresa tu nombre de usuario y contraseña.");
      return false;
    }
  
    // Validar las credenciales ingresadas
    for (var i = 0; i < usuariosRegistrados.length; i++) {
      if (usuario === usuariosRegistrados[i].usuario && contraseña === usuariosRegistrados[i].contraseña) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + usuario + "!");
        return true;
      }
    }
  
    // Si las credenciales son inválidas, mostrar un mensaje de error
    alert("Nombre de usuario o contraseña incorrectos. Por favor, intenta nuevamente.");
    return false;
  }
  