const http = require('http');

// Crear un servidor
const server = http.createServer((req, res) => {
  // Configurar encabezados de respuesta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Enviar respuesta al cliente
  res.end('¡Hola, mundo!');
});

// Escuchar en un puerto específico
const puerto = 2023;
server.listen(puerto, 'localhost', () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}/`);
});
