// Importa el módulo DataTypes desde Sequelize para definir tipos de datos.
import { DataTypes } from "sequelize";

// Importa la instancia de la base de datos "db" desde el archivo de configuración.
import db from "../config/db.js";

// Importa el módulo "bcrypt" para el proceso de hash de contraseñas.
import bcrypt from "bcrypt";

// Define el modelo "Usuario" que representa una tabla en la base de datos.
const Usuario = db.define("usuarios", {
  // Nombre del usuario (cadena de texto, no se permite nulo).
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  // Dirección de correo electrónico del usuario (cadena de texto, no se permite nulo).
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  // Contraseña del usuario (cadena de texto, no se permite nulo).
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  // Token de usuario (cadena de texto).
  token: {
    type: DataTypes.STRING,
  },
  
  // Estado de confirmación del usuario (booleano).
  confirmado: { 
    type: DataTypes.BOOLEAN,
  },
}, {
  hooks: {
    // Hook "beforeCreate" que se ejecuta antes de crear un nuevo usuario.
    beforeCreate: async function(usuario) {
      // Genera un "salt" (sal) para el proceso de hash de la contraseña.
      const salt = await bcrypt.genSalt(10);
      // Hashea la contraseña del usuario utilizando el "salt".
      usuario.password = await bcrypt.hash(usuario.password, salt);
    },
  },
  scopes: {
    // Define un conjunto de atributos que se deben excluir en ciertas consultas.
    eliminarPassword: {
      attributes: {
        exclude: ['password', 'token', 'confirmado', 'createdAt', 'updatedAt']
      }
    }
  }
});

// Método personalizado para verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos.
Usuario.prototype.verificarPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

// Exporta la entidad "Usuario" para poder usarla en otros módulos.
export default Usuario;
