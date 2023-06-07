console.log("script cargado");

// Obtener el contenedor de atributos y el botón "OTRO"
var atributosContainer = document.getElementById("atributos-container");
var agregarAtributoBtn = document.getElementById("agregar-atributo");

// Manejador de eventos para agregar otro conjunto de campos
agregarAtributoBtn.addEventListener("click", function () {
  // Crear los elementos HTML
  var row = document.createElement("div");
  row.className = "row mb-3";

  var nombreAtributoInput = document.createElement("input");
  nombreAtributoInput.type = "text";
  nombreAtributoInput.className = "form-control";
  nombreAtributoInput.placeholder = "Nombre del atributo";
  nombreAtributoInput.name = "attributeName";

  var tipoAtributoSelect = document.createElement("select");
  tipoAtributoSelect.className = "form-select";
  tipoAtributoSelect.name = "attributeType";
  var opciones = [
    { valor: "", texto: "Elija un tipo", disabled: true },
    { valor: "int", texto: "Entero" },
    { valor: "varchar(50)", texto: "Texto" },
    { valor: "tinyint(1)", texto: "Booleano" },
    { valor: "enum", texto: "Enum" },
  ];
  opciones.forEach(function (opcion) {
    var option = document.createElement("option");
    option.value = opcion.valor;
    option.text = opcion.texto;
    tipoAtributoSelect.appendChild(option);
  });

  // Agregar los elementos al contenedor
  var col1 = document.createElement("div");
  col1.className = "col";
  col1.appendChild(nombreAtributoInput);

  var col2 = document.createElement("div");
  col2.className = "col";
  col2.appendChild(tipoAtributoSelect);

  row.appendChild(col1);
  row.appendChild(col2);

  // Manejador del evento "change" para el tipo de atributo
  tipoAtributoSelect.addEventListener("change", function () {
    if (tipoAtributoSelect.value === "enum") {
      // const opcionesEnumInput = document.createElement("input");
      // opcionesEnumInput.type = "text";
      // opcionesEnumInput.name = "enumOptions";
      // row.appendChild(opcionesEnumInput);
  
      const agregarOpcBoton = document.createElement("button");
      agregarOpcBoton.type = "button";
      agregarOpcBoton.name = "enumOptionsButton";
      agregarOpcBoton.classList.add("rounded-button");
      agregarOpcBoton.textContent = "Agregar Opción";
      agregarOpcBoton.addEventListener("click", function () {
        const opcionEnum = document.createElement("input");
        opcionEnum.type = "text";
        opcionEnum.name = "enumOption";
        opcionEnum.className = "form-control";
        row.appendChild(opcionEnum);
      });
      row.appendChild(agregarOpcBoton);
  
      agregarOpcBoton.addEventListener("click", function () {
        const options = opcionesEnumInput.value.split(",");
        requestBody.attributes.push({
          name: nombreAtributoInput.value,
          type: tipoAtributoSelect.value,
          enumOptions: options,
        });
      });
    } else {
      // Limpiar los elementos relacionados con enumOptions
      const enumInputs = row.querySelectorAll('input[name="enumOption"]');
      enumInputs.forEach(function (input) {
        input.parentNode.removeChild(input);
      });
  
      const opcionesEnumInput = row.querySelector('input[name="enumOptions"]');
      if (opcionesEnumInput) {
        opcionesEnumInput.parentNode.removeChild(opcionesEnumInput);
      }
    }
  });
  

  // BOTÓN ELIMINAR ATRIBUTO SI SE DESEA
  var eliminarAtributoBtn = document.createElement("button");
  eliminarAtributoBtn.className = "btn btn-danger btn-sm";
  eliminarAtributoBtn.innerHTML = "Eliminar";
  eliminarAtributoBtn.addEventListener("click", function () {
    // Eliminar el conjunto de campos de atributo
    row.parentNode.removeChild(row);
  });

  col1.appendChild(eliminarAtributoBtn);

  atributosContainer.appendChild(row);
});

document.getElementById("otroPermiso").addEventListener("click", function () {
  var permisosDiv = document.getElementById("permisos");

  // Clonar el elemento select y labels
  var nuevoPermiso = permisosDiv.cloneNode(true);

  // Restablecer los valores seleccionados y las casillas de verificación
  var select = nuevoPermiso.querySelector("select");
  select.selectedIndex = 0;
  var checkboxes = nuevoPermiso.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  // Crear un contenedor para el permiso y el botón "Eliminar"
  var permisoRow = document.createElement("div");
  permisoRow.className = "permiso-row";
  permisoRow.appendChild(nuevoPermiso);

  // BOTÓN ELIMINAR PERMISO SI SE DESEA
  var eliminarPermisoBtn = document.createElement("button");
  eliminarPermisoBtn.className = "btn btn-danger btn-sm eliminar-permiso";
  eliminarPermisoBtn.innerHTML = "Eliminar";
  eliminarPermisoBtn.addEventListener("click", function () {
    // Eliminar el conjunto de campos de permiso
    permisoRow.parentNode.removeChild(permisoRow);
  });

  permisoRow.appendChild(eliminarPermisoBtn);

  // Agregar el nuevo permiso al final
  permisosDiv.parentNode.appendChild(permisoRow);
});

// TOMAR DATOS DEL formulario

const formulario = document.getElementById("formulario");
const boton = document.getElementById("generarCrud");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const datosFormulario = new FormData(formulario);
  const requestBody = {
    tableName: datosFormulario.get("nombreTabla"),
    attributes: [],
  };

  const attributeNames = datosFormulario.getAll("attributeName");
  const attributeTypes = datosFormulario.getAll("attributeType");

  for (let i = 0; i < attributeNames.length; i++) {
    const attributeName = attributeNames[i];
    const attributeType = attributeTypes[i];

    let attributeData = {
      name: attributeName,
      type: attributeType,
    };

    if (attributeType === "enum") {
      const enumOptions = datosFormulario.getAll("enumOption");
      attributeData.enumOptions = enumOptions;
    }

    requestBody.attributes.push(attributeData);
  }

  console.log(requestBody.tableName);
  console.log(requestBody.attributes);

  // ENVIO DATOS AL BACKEND
  // Enviar la solicitud al backend
  fetch("/generadorCrud", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
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
