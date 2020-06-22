const mongoose = require('mongoose');
const Adelanto = require('./adelanto');
const {Schema} = mongoose;

const PasajeSchema = new Schema({
    dniPasajero: {type: String, required: true},
    precioPasaje: {type: String, required: true},
    categoriaPasajero: {type: String, required: true},
    fechaCompra: {type: String},
    adelantos: {type: Schema.Types.ObjectId, ref: Adelanto}
})

module.exports = mongoose.model('pasaje', PasajeSchema);