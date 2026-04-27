require("dotenv").config();
const { Pool } = require("pg");

const banco = new Pool({
  user: process.env.DB_USUARIO,
  host: process.env.DB_HOST,
  database: process.env.DB_NOME,
  password: process.env.DB_SENHA,
  port: process.env.DB_PORTA,
});

module.exports = banco;

