const Empresa = require('../models/empresa'); 

const empresaCtrl = {}

empresaCtrl.getEmpresas = async (req, res) => {
    empresas = await Empresa.find().populate("empresa");
    res.json(empresas);
}

empresaCtrl.createEmpresa = async (req, res) => {
    console.log("entro create empresa");
    const empresa = new Empresa (req.body);
    await empresa.save();
    res.json({
        'status': 'Empresa saved'
    });
}

empresaCtrl.getEmpresa = async (req, res) => {
    const empresa = await Empresa.findById(req.params.id);
    res.json(empresa);
}

empresaCtrl.editEmpresa = async (req, res) => {
    const vempresa =  new Empresa (req.body);
    await Empresa.findByIdAndUpdate(req.params.id, {$set: vempresa}, {new: true});
    res.json({
        'status': 'Empresa updated'
    })
}
empresaCtrl.deleteEmpresa = async (req, res)=>{
    await Empresa.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Empresa removed'
    })
}
module.exports= empresaCtrl;