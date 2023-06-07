// CONEXION POR SEQUELIZE
import Sequelize from "sequelize";

const sequelize = new Sequelize("generadorcrud", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

async function testDeConexion() {
  try {
    await sequelize.authenticate();
    console.log("Conexion exitosa a la base de datos");
  } catch (error) {
    console.log(error);
  }
}

const crearTabla = async (nombreTabla, atributos) => {
  //console.log(nombreTabla,"en conexion");
  //console.log(atributos, "atributos en conexion");
  const columnas = {};
  for (let atributo of atributos) {
    columnas[atributo.name] = {
      type: [atributo.type],
      allowNull: false,
    };
  }
  console.log(columnas);

  const TablaCompleta = sequelize.define(nombreTabla, columnas, {
    timestamps: false,
  });

  try {
    await TablaCompleta.sync();
    console.log(`Tabla ${nombreTabla} creada`);
  } catch (error) {
    console.log(error);
  }
};
const crearUsuario = async (nombreTabla, nombre, contraseña) => {
  const columnas = {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contraseña: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  };

  const TablaCompleta = sequelize.define(nombreTabla, columnas, {
    timestamps: false,
  });

  try {
    await TablaCompleta.sync();
    console.log(`Usuario ${nombreTabla} creada`);

    // Insertar el nuevo usuario
    await TablaCompleta.create({
      nombre: nombre,
      contraseña: contraseña,
    });

    console.log("Usuario creado exitosamente");
  } catch (error) {
    console.log(error);
  }
};

export { crearTabla, crearUsuario, sequelize, testDeConexion };
