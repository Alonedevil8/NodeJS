# Microservicios Tutoriales - Aplicación de Compra y Venta de Bienes Raíces

![Microservicios Tutoriales Logo]

Este repositorio contiene una aplicación de compra y venta de bienes raíces construida con microservicios. Aquí encontrarás información sobre la configuración del proyecto y cómo ejecutarlo. ¡Comencemos!

## Contenido

1. [Información del Proyecto](#información-del-proyecto)
2. [Configuración del Proyecto](#configuración-del-proyecto)
3. [Scripts Disponibles](#scripts-disponibles)
4. [Modelos de Datos](#modelos-de-datos)
5. [Descripción de la Aplicación](#descripción-de-la-aplicación)
6. [Licencia](#licencia)

## Información del Proyecto

- **Nombre del Proyecto:** microservicios_tutoriales
- **Versión:** 1.0.0
- **Autor:** Andrés Dorado
- **Licencia:** ISC

## Configuración del Proyecto

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Luego, sigue estos pasos para configurar el proyecto:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/microservicios_tutoriales.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd microservicios_tutoriales
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Scripts Disponibles

Este proyecto viene con varios scripts predefinidos en el archivo `package.json`:

- `npm run start`: Inicia la aplicación.
- `npm run server`: Inicia la aplicación con nodemon para reiniciar automáticamente en cambios.
- `npm run css`: Compila los estilos usando PostCSS y Tailwind CSS.
- `npm run js`: Compila los archivos JavaScript con Webpack.
- `npm run dev`: Inicia la aplicación en modo desarrollo, ejecutando los scripts CSS, JS y servidor simultáneamente.
- `npm run db:importar`: Importa datos iniciales a la base de datos.
- `npm run db:eliminar`: Elimina datos de la base de datos.

## Modelos de Datos

Los modelos de datos se importan desde sus respectivos archivos y se establecen relaciones utilizando el método "belongsTo". Aquí están los modelos disponibles:

- Propiedad
- Precio
- Categoria
- Usuario
- Mensaje

A continuación, se muestran las relaciones entre los modelos:

```javascript
Propiedad.belongsTo(Precio); // Propiedad pertenece a Precio.
Propiedad.belongsTo(Categoria); // Propiedad pertenece a Categoria.
Propiedad.belongsTo(Usuario); // Propiedad pertenece a Usuario.
Propiedad.hasMany(Mensaje, { foreignKey: "propiedadId" });

Mensaje.belongsTo(Propiedad, { foreignKey: "propiedadId" });
Mensaje.belongsTo(Usuario, { foreignKey: "usuarioId" });

// Exporta los modelos de datos para poder utilizarlos en otros módulos.
export { Propiedad, Precio, Categoria, Usuario, Mensaje };
```

## Descripción de la Aplicación

Esta es una aplicación de compra y venta de bienes raíces construida con microservicios. Los usuarios pueden explorar propiedades, ver detalles, ponerse en contacto con vendedores y más. Los modelos de datos están diseñados para administrar propiedades, precios, categorías, usuarios y mensajes.

¡Explora y disfruta de la aplicación!

## Licencia

Este proyecto está bajo la Licencia ISC. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

¡Gracias por visitar nuestro repositorio! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros.

---

**Microservicios Tutoriales** - Desarrollado por Andrés Dorado
