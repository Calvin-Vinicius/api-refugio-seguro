const abrigoModelo = require("../modelos/abrigoModelo");

exports.listarAbrigos = async (req, res) => {
  try {
    const abrigos = await abrigoModelo.buscarAbrigos();
    res.json(abrigos);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
};

exports.criarAbrigo = async (req, res) => {
  try {
    const abrigo = await abrigoModelo.criarAbrigo(req.body);
    res.status(201).json(abrigo);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
};