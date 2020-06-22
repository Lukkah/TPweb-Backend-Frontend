const Asistente = require('../models/asistente'); 

const asistenteCtrl = {}
asistenteCtrl.getAsistentes = async (req, res) => {
    asistentes = await Asistente.find().populate("asistente");
    res.json(asistentes);
}

asistenteCtrl.createAsistente = async (req, res) => {
    const asistentes = new Asistente (req.body);
    await asistentes.save();
    res.json({
        'status': 'Asistentes saved'
    });
}

asistenteCtrl.editAsistente = async (req, res) => {
    const vAsistente =  new Asistente (req.body);

    await Asistente.findByIdAndUpdate(req.params.id, {$set: vAsistente}, {new: true});
    res.json({
        'status': 'Asistente updated'
    })
}

asistenteCtrl.getAsistente = async (req, res) => {
    const asistente = await Asistente.findById(req.params.id).populate("asistente");
    res.json(asistente);
}

asistenteCtrl.deleteAsistente = async (req, res)=>{
    await Asistente.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Asistente removed'
    })
}
module.exports= asistenteCtrl;