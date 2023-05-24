function validarEntero(valor) {
    return Number.isInteger(valor);
  }
  
  function validarVarchar(valor) {
    return typeof valor === 'string' && valor.length <= 50;
  }
  
  function validarBool(valor) {
    return typeof valor === 'boolean';
  }
  
  function validarEnum(valor, opciones) {
    return opciones.includes(valor);
  }
  
  // Ejemplo de uso
  
  var entero = 42;
  var varchar = "Hola, mundo!";
  var bool = true;
  var enumValue = "opcion2";
  var enumOpciones = ["opcion1", "opcion2", "opcion3"];
  
  if (validarEntero(entero) && validarVarchar(varchar) && validarBool(bool) && validarEnum(enumValue, enumOpciones)) {
    // Los datos son válidos, realizar la inserción en la base de datos SQL
    // ...
  } else {
    // Los datos no son válidos, mostrar un mensaje de error o realizar alguna acción adecuada
    // ...
  }
  
  //funcion para validar que se eligio un 