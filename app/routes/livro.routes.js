const { Router } = require('express');
const livroController = require('../controller/livro.controller');
const livroRouter = Router();

livroRouter.post('/livro', livroController.create);

livroRouter.get('/livro', livroController.findAll);
livroRouter.get('/livro/autor', livroController.findByAuthor);
livroRouter.get('/livro/:id', livroController.findOne);

livroRouter.put('/livro/:id', livroController.update);

livroRouter.delete('/livro', livroController.deleteAll);
livroRouter.delete('/livro/:id', livroController.deleteById);

module.exports = { livroRouter };