//creamos un manejador de pasajes modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const pasajeCtrl = require('./../controllers/pasaje.controller');

// definiendo pasaje
router.get('/', pasajeCtrl.getPasajes);
router.post('/', pasajeCtrl.createPasaje);
router.get('/:id', pasajeCtrl.getPasaje);
router.put('/:id', pasajeCtrl.editPasaje);
router.delete('/:id', pasajeCtrl.deletePasaje);

//exportacion del modulo de pasaje
module.exports = router;