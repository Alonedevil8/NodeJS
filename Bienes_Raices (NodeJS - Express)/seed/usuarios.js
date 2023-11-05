import bcrypt from "bcrypt";

const usuarios = [
  {
    nombre: "Andres Felipe Melendez Dorado",
    email: "afmd91@gmail.com",
    confirmado: 1,
    password: bcrypt.hashSync("avatar2020", 10)
  },
];

export default usuarios;
