import { Precio, Categoria, Propiedad } from "../models/index.js";
import { Sequelize } from "sequelize";

const inicio = async (req, res) => {
  // Generar de manera aleatoria 1 o 2
  const randomCategory = Math.floor(Math.random() * 2) + 2; // Genera 2 o 3

  const [categorias, precios, apartamentos] = await Promise.all([
    Categoria.findAll({ raw: true }),
    Precio.findAll({ raw: true }),

    Propiedad.findAll({
      limit: 3,
      where: {
        categoriaId: randomCategory, // Usar el número aleatorio como ID de categoría
      },
      include: [
        { model: Categoria, as: "categoria" },
        { model: Precio, as: "precio" },
      ],
      order: [["createdAt", "DESC"]],
    }),

    // Otra consulta basada en el valor aleatorio, si es necesario
  ]);

  res.render("inicio", {
    pagina: "Inicio",
    categorias,
    precios,
    apartamentos,
    csrfToken: req.csrfToken(),
  });
};

const categoria = async (req, res) => {
  const { id } = req.params;

  //Comprovar que la categoria exista
  const categoria = await Categoria.findByPk(id);
  if (!categoria) {
    return res.redirect("/404");
  }

  //comprovar las propiedades de la categoria
  const propiedades = await Propiedad.findAll({
    where: {
      categoriaId: id,
    },
    include: [{ model: Precio, as: "precio" }],
  });

  res.render("categoria", {
    pagina: `${categoria.nombre} en Venta`,
    propiedades,
    csrfToken: req.csrfToken(),
  });
};

const noEncontrado = (req, res) => {
  res.render("404", {
    pagina: "No Encontrada",
    csrfToken: req.csrfToken(),
  });
};

const buscador = async (req, res) => {
  const { termino } = req.body;

  if (!termino.trim()) {
    return res.redirect("back");
  }

  const propiedades = await Propiedad.findAll({
    where: {
      titulo: {
        [Sequelize.Op.like]: "%" + termino + "%",
      },
    },
    include: [{ model: Precio, as: "precio" }],
  });

  console.log(propiedades)

  res.render("busquedad", {
    pagina: "Resultados de la Busqueda",
    propiedades,
    csrfToken: req.csrfToken(),
  });
};

export { inicio, categoria, noEncontrado, buscador };
