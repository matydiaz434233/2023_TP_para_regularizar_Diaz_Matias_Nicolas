console.log("scrip cargado");
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

  var tipoAtributoSelect = document.createElement("select");
  tipoAtributoSelect.className = "form-select";
  var opciones = [
    { valor: "", texto: "Elija un tipo", disabled: true },
    { valor: "integer", texto: "Entero" },
    { valor: "varchar(50)", texto: "Varchar (50)" },
    { valor: "bool", texto: "Bool" },
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

  atributosContainer.appendChild(row);
});





document.getElementById('otroPermiso').addEventListener('click', function() {
  var permisosDiv = document.getElementById('permisos');

  // Clonar el elemento select y labels
  var nuevoPermiso = permisosDiv.cloneNode(true);

  // Restablecer los valores seleccionados y las casillas de verificación
  var select = nuevoPermiso.querySelector('select');
  select.selectedIndex = 0;
  var checkboxes = nuevoPermiso.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }

  // Agregar el nuevo permiso al final
  permisosDiv.parentNode.appendChild(nuevoPermiso);
});

