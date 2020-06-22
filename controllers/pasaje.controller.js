const Pasaje = require('../models/pasaje'); 

const pasajeCtrl = {}
pasajeCtrl.getPasajes = async (req, res) => {
    pasajes = await Pasaje.find().populate("pasaje");
    res.json(pasajes);
}

pasajeCtrl.createPasaje = async (req, res) => {
    const pasaje = new Pasaje (req.body);
    await pasaje.save();
    res.json({
        'status': 'Pasaje saved'
    });
}

pasajeCtrl.editPasaje = async (req, res) => {
    const vPasaje=  new Pasaje (req.body);

    await Pasaje.findByIdAndUpdate(req.params.id, {$set: vPasaje}, {new: true});
    res.json({
        'status': 'Pasaje updated'
    })
}

pasajeCtrl.getPasaje = async (req, res) => {
    const pasaje = await Pasaje.findById(req.params.id).populate("pasaje");
    res.json(pasaje);
}

pasajeCtrl.deletePasaje = async (req, res)=>{
    await Pasaje.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Pasaje removed'
    })
}
module.exports= pasajeCtrl;