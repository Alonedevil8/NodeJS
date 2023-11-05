// Importa los modelos de datos desde sus respectivos archivos.
import Propiedad from "./Propiedad.js";
import Precio from "./Precio.js";
import Categoria from "./Categoria.js";
import Usuario from "./Usuario.js";
import Mensaje from "./mensaje.js";

// Establece las relaciones entre los modelos utilizando el método "belongsTo".
Propiedad.belongsTo(Precio); // Propiedad pertenece a Precio.
Propiedad.belongsTo(Categoria); // Propiedad pertenece a Categoria.
Propiedad.belongsTo(Usuario); // Propiedad pertenece a Usuario.
Propiedad.hasMany(Mensaje, { foreignKey: "propiedadId" });

Mensaje.belongsTo(Propiedad, { foreignKey: "propiedadId" });
Mensaje.belongsTo(Usuario, { foreignKey: "usuarioId" });

// Exporta los modelos de datos para poder utilizarlos en otros módulos.
export { Propiedad, Precio, Categoria, Usuario, Mensaje };
