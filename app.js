const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/abrigos", require("./routes/abrigoRotas"));

module.exports = app;