const { Router } = require("express");
const { registroUsuario } = require("../controllers/usuarios.controllers");
const router = Router();
router.post("/", registroUsuario);
module.exports = router;
