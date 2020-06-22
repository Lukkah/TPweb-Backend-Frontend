console.log("cargo adelanto.route");
//creamos un manejador de adelantos modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const adelantoCtrl = require('./../controllers/adelanto.controller');

// definiendo adelanto
router.get('/', adelantoCtrl.getAdelantos);
router.post('/', adelantoCtrl.createAdelanto);
router.get('/:id', adelantoCtrl.getAdelanto);
router.put('/:id', adelantoCtrl.editAdelanto);
router.delete('/:id', adelantoCtrl.deleteAdelanto);

//exportacion del modulo de adelantos
module.exports = router;