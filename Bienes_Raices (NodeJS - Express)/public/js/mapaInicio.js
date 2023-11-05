/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mapaInicio.js":
/*!******************************!*\
  !*** ./src/js/mapaInicio.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function () {\r\n  // Coordenadas geográficas para la ubicación del mapa.\r\n  const lat = 7.995259;\r\n  const lng = -75.2060904;\r\n\r\n  // Se crea un objeto de mapa de Leaflet y se establece su vista inicial en las coordenadas especificadas.\r\n  const mapa = L.map(\"mapa-inicio\").setView([lat, lng], 13);\r\n\r\n  // Se crea un grupo de elementos para los marcadores y se agrega al mapa.\r\n  let markers = new L.FeatureGroup().addTo(mapa);\r\n\r\n  // Se crea una matriz para almacenar propiedades.\r\n  let propiedades = [];\r\n\r\n  // Selecciona los elementos del DOM con los ID \"categorias\" y \"precios\".\r\n  const categoriasSelect = document.querySelector(\"#categorias\");\r\n  const preciosSelect = document.querySelector(\"#precios\");\r\n\r\n  // Se definen filtros iniciales para categoría y precio.\r\n  const filtros = {\r\n    categoria: \"\",\r\n    precio: \"\",\r\n  };\r\n\r\n  // Se agrega una capa de azulejos de OpenStreetMap al mapa.\r\n  L.tileLayer(\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\", {\r\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\r\n  }).addTo(mapa);\r\n\r\n  // Se agrega un event listener para el cambio en la selección de categorías.\r\n  categoriasSelect.addEventListener(\"change\", (e) => {\r\n    filtros.categoria = e.target.value;\r\n    filtrarPropiedades(propiedades);\r\n  });\r\n\r\n  // Se agrega un event listener para el cambio en la selección de precios.\r\n  preciosSelect.addEventListener(\"change\", (e) => {\r\n    filtros.precio = e.target.value;\r\n    filtrarPropiedades(propiedades);\r\n  });\r\n\r\n  // Función asincrónica para obtener datos de propiedades desde un endpoint de API.\r\n  const obtenerPropiedades = async () => {\r\n    try {\r\n      const url = \"/api/propiedades\";\r\n      const respuesta = await fetch(url);\r\n      propiedades = await respuesta.json();\r\n      mostrarPropiedades(propiedades);\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  };\r\n\r\n  // Función para mostrar propiedades en el mapa.\r\n  const mostrarPropiedades = (propiedades) => {\r\n    propiedades.forEach((propiedad) => {\r\n      // Se crea un marcador en el mapa para cada propiedad y se le adjunta una ventana emergente con información.\r\n      const marker = new L.marker([propiedad?.lat, propiedad?.lng], {\r\n        autoPan: true,\r\n      }).addTo(markers)\r\n        .bindPopup(`\r\n            <span class=\"text-xs font-bold italic text-blue-500\">${propiedad.categoria.nombre}</span>\r\n            <h3 class=\"text-xs font-extrabold uppercase my-5\">${propiedad?.titulo}</h3>\r\n            <img src=\"/uploads/${propiedad?.imagen}\" alt=\"Imagen de la propiedad ${propiedad.titulo}\"></img>\r\n            <p class=\"text-green-600 font-bold\">${propiedad.precio.nombre}</p>\r\n            <a class=\"block text-center text-xs\" href=\"/propiedad/${propiedad.id}\">Ver</a>\r\n        `);\r\n\r\n      // Se agrega el marcador al grupo de elementos de marcadores.\r\n      markers.addLayer(marker);\r\n    });\r\n  };\r\n\r\n  // Función para filtrar propiedades en función de los filtros seleccionados.\r\n  const filtrarPropiedades = () => {\r\n    // Se aplican filtros de categoría y precio a las propiedades.\r\n    const propiedadesFiltradas = propiedades\r\n      .filter(filtrarCategoria)\r\n      .filter(filtrarPrecio);\r\n\r\n    // Se eliminan los marcadores actuales en el mapa.\r\n    markers.clearLayers();\r\n\r\n    // Se muestran las propiedades filtradas en el mapa.\r\n    mostrarPropiedades(propiedadesFiltradas);\r\n  };\r\n\r\n  // Función para filtrar propiedades por categoría.\r\n  const filtrarCategoria = (propiedad) => {\r\n    return filtros.categoria\r\n      ? propiedad.categoria.nombre === filtros.categoria\r\n      : propiedad;\r\n  };\r\n\r\n  // Función para filtrar propiedades por precio.\r\n  const filtrarPrecio = (propiedad) => {\r\n    return filtros.precio\r\n      ? propiedad.precio.nombre === filtros.precio\r\n      : propiedad;\r\n  };\r\n\r\n  // Se llama a la función para obtener las propiedades iniciales.\r\n  obtenerPropiedades();\r\n})();\r\n\n\n//# sourceURL=webpack://microservicios_tutoriales/./src/js/mapaInicio.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/mapaInicio.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;