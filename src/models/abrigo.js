const banco = require("../config/banco");

exports.listar = async () => {
  const resultado = await banco.query("SELECT * FROM abrigos");
  return resultado.rows;
};

exports.criar = async (dados) => {
  const { nome, endereco, latitude, longitude, capacidade } = dados;

  const resultado = await banco.query(
    `INSERT INTO abrigos (nome, endereco, latitude, longitude, capacidade)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [nome, endereco, latitude, longitude, capacidade]
  );

  return resultado.rows[0];
};