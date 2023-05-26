const Sequelize = require('sequelize');


//Sequelize('mysql://user:password@localhost:2023/generadorcrud');
const sequelize = new Sequelize('generadorcrud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

// sequelize.authenticate().then(() => {
//   console.log('conexion exitosa');
// }) .catch(err => {
//   console.log('error en la conexion', err);
// })
module.exports = sequelize 
