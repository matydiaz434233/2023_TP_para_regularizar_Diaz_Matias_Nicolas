// CONEXION POR SEQUELIZE
import Sequelize from 'sequelize';

const sequelize = new Sequelize('generadorcrud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});
export default sequelize;
// CONEXION POR SQL
// import mysql from 'mysql2';
// import { query } from 'express';
//  var connection = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: '',
//   database: 'generadorcrud',
//   port: 3306
//  })



// connection.connect((err) => {
//   if (err) {
//     console.log('error en la conexion', err);
//   } else {
//     console.log('conexion exitosa a la base de datos de generadorCrud');
//   }
// })

// //connection.end();    //  cierro la conexion


// // pool de conexiones

// var poolconnection = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//  database: 'generadorcrud',
// })
// poolconnection.query(query,params,  (err, result , fiels) => {
//   //hago cosas con la base de datos
// })

// //export { poolconnection, connection, sequelize };