const Sequelize = require('sequelize');

// Crea una instancia de Sequelize con los parámetros de conexión
const sequelize = new Sequelize('generadorCrud', 'usuario', 'contraseña', {
  host: 'localhost', 
  dialect: 'mysql', 
});

// Prueba la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Definición de modelos y consultas aquí proximamente

// Exporta la instancia de Sequelize para usarla en otros archivos
module.exports = sequelize;
