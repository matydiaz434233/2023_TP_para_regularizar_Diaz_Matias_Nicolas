//************************     SCRIP EDDERR */

console.log('script cargada');
// Obtener referencias a los elementos relevantes del DOM
const attributesContainer = document.getElementById("attributesContainer");
const addAttributeButton = document.getElementById("addAttribute");
const tablaForm = document.getElementById("generarCRUDForm");

// Función para crear una nueva fila de atributo
const crearAtributo = () => {
  // Crear un nuevo elemento de entrada de texto para el nombre del atributo
  const nombreInput = document.createElement("input");
  nombreInput.type = "text";
  nombreInput.classList = "atributo";
  nombreInput.name = "attributeName";

  // Crear un nuevo elemento <select> para el tipo de atributo
  const tipoSelect = document.createElement("select");
  tipoSelect.classList = "tipo";
  tipoSelect.name = "attributeType";

  // Crear las opciones del <select> para el tipo de atributo
  const opciones = [
    "Seleccione Tipo",
    "int",
    "varchar(50)",
    "tinyint(1)",
    "enum",
  ];
  opciones.forEach((opcion) => {
    const option = document.createElement("option");
    option.value = opcion;
    option.text = opcion;
    tipoSelect.appendChild(option);
  });

  // Crear un nuevo elemento <div> para envolver el nombre del atributo, el tipo de atributo y el botón de eliminar
  const div = document.createElement("div");
  div.classList = "atributo-row";
  div.appendChild(nombreInput);
  div.appendChild(tipoSelect);

  // Crear un nuevo elemento <botton> para eliminar el atributo
  const eliminarBtn = document.createElement("button");
  eliminarBtn.type = "button";
  eliminarBtn.classList = "eliminar-atributo";
  eliminarBtn.textContent = "Eliminar";
  eliminarBtn.addEventListener("click", () => {
    div.remove(); // Eliminar la fila de atributo al hacer clic en el botón de eliminar
  });
  div.appendChild(eliminarBtn);

  // Agregar la nueva fila de atributo al div de atributos
  attributesContainer.appendChild(div);
};

// Agregar un event listener al botón para crear un nuevo atributo
addAttributeButton.addEventListener("click", crearAtributo);

// Agregar un event listener al formulario para guardar los datos
tablaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
//-----------------------------------------Crear Json---------------------------<<
  // Obtener los datos del formulario
  const formData = new FormData(tablaForm);
  const requestBody = {
    tableName: formData.get("tableName"),
    attributes: [],
  };

  // Recorrer los atributos del formulario y agregarlos al requestBody
  const attributeNames = formData.getAll("attributeName");
  const attributeTypes = formData.getAll("attributeType");
  for (const [index, attributeName] of attributeNames.entries()) {
    const attributeType = attributeTypes[index];

    requestBody.attributes.push({
      name: attributeName,
      type: attributeType,
    });
  }

  //-------------------------------Enviar al BackEnd----------------------------------------<<
  // Enviar la solicitud al backend
  fetch("/generarCRUD", {
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
      console.error('error al enviar la solicitud', error);
    });
});
