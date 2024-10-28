require("../db/config");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

class Server {
  constructor() {
    this.app = express();
    this.middleware();
    this.rutas();
  }

  middleware() {
    this.app.use(express.json()) /* habilitamos el formato JSON */;
    this.app.use(express.static("./public"));
  }

  rutas() {
    this.app.use("/api/usuarios", require("../routes/usuarios.routes"));
  }

  listen() {
    this.app.listen(3001, () => {
      console.log("server arriba", 3001);
    });
  }
}

module.exports = Server;
