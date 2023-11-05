(function () {
  // Coordenadas geográficas para la ubicación del mapa.
  const lat = 7.995259;
  const lng = -75.2060904;

  // Se crea un objeto de mapa de Leaflet y se establece su vista inicial en las coordenadas especificadas.
  const mapa = L.map("mapa-inicio").setView([lat, lng], 13);

  // Se crea un grupo de elementos para los marcadores y se agrega al mapa.
  let markers = new L.FeatureGroup().addTo(mapa);

  // Se crea una matriz para almacenar propiedades.
  let propiedades = [];

  // Selecciona los elementos del DOM con los ID "categorias" y "precios".
  const categoriasSelect = document.querySelector("#categorias");
  const preciosSelect = document.querySelector("#precios");

  // Se definen filtros iniciales para categoría y precio.
  const filtros = {
    categoria: "",
    precio: "",
  };

  // Se agrega una capa de azulejos de OpenStreetMap al mapa.
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapa);

  // Se agrega un event listener para el cambio en la selección de categorías.
  categoriasSelect.addEventListener("change", (e) => {
    filtros.categoria = e.target.value;
    filtrarPropiedades(propiedades);
  });

  // Se agrega un event listener para el cambio en la selección de precios.
  preciosSelect.addEventListener("change", (e) => {
    filtros.precio = e.target.value;
    filtrarPropiedades(propiedades);
  });

  // Función asincrónica para obtener datos de propiedades desde un endpoint de API.
  const obtenerPropiedades = async () => {
    try {
      const url = "/api/propiedades";
      const respuesta = await fetch(url);
      propiedades = await respuesta.json();
      mostrarPropiedades(propiedades);
    } catch (error) {
      console.log(error);
    }
  };

  // Función para mostrar propiedades en el mapa.
  const mostrarPropiedades = (propiedades) => {
    propiedades.forEach((propiedad) => {
      // Se crea un marcador en el mapa para cada propiedad y se le adjunta una ventana emergente con información.
      const marker = new L.marker([propiedad?.lat, propiedad?.lng], {
        autoPan: true,
      }).addTo(markers)
        .bindPopup(`
            <span class="text-xs font-bold italic text-blue-500">${propiedad.categoria.nombre}</span>
            <h3 class="text-xs font-extrabold uppercase my-5">${propiedad?.titulo}</h3>
            <img src="/uploads/${propiedad?.imagen}" alt="Imagen de la propiedad ${propiedad.titulo}"></img>
            <p class="text-green-600 font-bold">${propiedad.precio.nombre}</p>
            <a class="block text-center text-xs" href="/propiedad/${propiedad.id}">Ver</a>
        `);

      // Se agrega el marcador al grupo de elementos de marcadores.
      markers.addLayer(marker);
    });
  };

  // Función para filtrar propiedades en función de los filtros seleccionados.
  const filtrarPropiedades = () => {
    // Se aplican filtros de categoría y precio a las propiedades.
    const propiedadesFiltradas = propiedades
      .filter(filtrarCategoria)
      .filter(filtrarPrecio);

    // Se eliminan los marcadores actuales en el mapa.
    markers.clearLayers();

    // Se muestran las propiedades filtradas en el mapa.
    mostrarPropiedades(propiedadesFiltradas);
  };

  // Función para filtrar propiedades por categoría.
  const filtrarCategoria = (propiedad) => {
    return filtros.categoria
      ? propiedad.categoria.nombre === filtros.categoria
      : propiedad;
  };

  // Función para filtrar propiedades por precio.
  const filtrarPrecio = (propiedad) => {
    return filtros.precio
      ? propiedad.precio.nombre === filtros.precio
      : propiedad;
  };

  // Se llama a la función para obtener las propiedades iniciales.
  obtenerPropiedades();
})();
