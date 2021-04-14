const express = require('express');
const connection = require('./model/index');
const { livroRouter } = require('./routes/livro.routes');
const { locatarioRouter } = require('./routes/locatario.routes');

const app = express();
app.use(express.json());
app.use(livroRouter);
app.use(locatarioRouter);
connection.sequelize.sync();

module.exports = { app }