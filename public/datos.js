// Ejemplo de nombre de recurso: "recurso1?atributo1=valor1&atributo2=valor2"
//const nombreRecurso = 
function capturarDatos(nombreRecurso) {
    // Obtener los atributos y sus valores
    const atributos = {};
    const parametros = nombreRecurso.split('?')[1]; // Obtener la parte de los parámetros después del signo de interrogación
    
    if (parametros) {
      const paresParametros = parametros.split('&'); // Dividir los pares de atributo=valor
    
      for (let i = 0; i < paresParametros.length; i++) {
        const [atributo, valor] = paresParametros[i].split('=');
        atributos[atributo] = valor; // Almacenar el atributo y su valor en el objeto de atributos
      }
    }
    
    // Imprimir los resultados
    console.log('Nombre del recurso:', nombreRecurso.split('?')[0]);
    console.log('Atributos:', atributos);
  }
  
  // Ejemplo de uso
  const nombreRecurso = "recurso1?atributo1=valor1&atributo2=valor2";
  capturarDatos(nombreRecurso);
  