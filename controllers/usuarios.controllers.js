const servicioUsuarios = require("../services/usuarios.services");
const registroUsuario = async (req, res) => {
  try {
    const usuarioCreado = await servicioUsuarios.altaDeUsuario(req.body);
    res.status(201).json(usuarioCreado);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = {
  registroUsuario,
};
