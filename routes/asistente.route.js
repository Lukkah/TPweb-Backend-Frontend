//creamos un manejador de asistentes modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const asistenteCtrl = require('./../controllers/asistente.controller');

// definiendo asistentes
router.get('/', asistenteCtrl.getAsistentes);
router.post('/', asistenteCtrl.createAsistente);
router.get('/:id', asistenteCtrl.getAsistente);
router.put('/:id', asistenteCtrl.editAsistente);
router.delete('/:id', asistenteCtrl.deleteAsistente);

//exportacion del modulo de asistentes
module.exports = router;