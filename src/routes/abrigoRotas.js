const express = require("express");
const rota = express.Router();
const controlador = require("../controladores/abrigoControlador");

rota.get("/", controlador.listarAbrigos);
rota.post("/", controlador.criarAbrigo);

module.exports = rota;