import express from "express";
import {
  formularioLogin,
  formularioRegistro,
  formularioOlvidePassword,
  registrar,
  confirmar,
  resetPassword,
  comprobarToken,
  nuevoPassword,
  autenticar,
  cerrarSesion,
} from "../controllers/usuarioController.js";

const router = express.Router();

// Componente routes login
router.get("/login", formularioLogin);
router.post("/login", autenticar);

//cerrar sesion
router.post("/cerrar-sesion", cerrarSesion);

// Componente routes registro
router.get("/registro", formularioRegistro);
router.post("/registro", registrar);

//confirmar - verificar token
router.get("/confirma/:token", confirmar);

// Componente routes recuperar password
router.get("/olvidePassword", formularioOlvidePassword);
router.post("/olvidePassword", resetPassword);

//almacena el nuevo password
router.get("/olvidePassword/:token", comprobarToken);
router.post("/olvidePassword/:token", nuevoPassword);

export default router;
