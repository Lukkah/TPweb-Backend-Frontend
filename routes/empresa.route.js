console.log("cargo empresa.route");
//creamos un manejador de empresas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const empresaCtrl = require('./../controllers/empresa.controller');

// definiendo empresas
router.get('/', empresaCtrl.getEmpresas);
router.post('/', empresaCtrl.createEmpresa);
router.get('/:id', empresaCtrl.getEmpresa);
router.put('/:id', empresaCtrl.editEmpresa);
router.delete('/:id', empresaCtrl.deleteEmpresa);

//exportacion del modulo de empresas
module.exports = router;