const express = require('express');
const { app } = require('./app/app')
const server = express();
server.use(app);

const port = process.env.PORT || 3030;

server.listen(port, () => console.log(`Servidor rodando em http://127.0.0.1:${port}`));