//creamos un manejador de mensajes modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const mensajeCtrl = require('./../controllers/mensaje.controller');

// definiendo mensajes
router.get('/', mensajeCtrl.getMensajes);
router.post('/', mensajeCtrl.createMensaje);
router.get('/:id', mensajeCtrl.getMensaje);
router.put('/:id', mensajeCtrl.editMensaje);
router.delete('/:id', mensajeCtrl.deleteMensaje);

//exportacion del modulo de mensajes
module.exports = router;