const { Router } = require('express');
const locatarioController = require('../controller/locatario.controller');
const locatarioRouter = Router();

locatarioRouter.post('/locatario', locatarioController.create);

locatarioRouter.get('/locatario', locatarioController.findAll);
locatarioRouter.get('/locatario/:id', locatarioController.findOne);
locatarioRouter.get('/enable', locatarioController.findAllEnable);

locatarioRouter.delete('/locatario', locatarioController.deleteAll);
locatarioRouter.delete('/locatario/:id', locatarioController.deleteById);

locatarioRouter.put('/locatario/:id', locatarioController.update);

module.exports = { locatarioRouter };