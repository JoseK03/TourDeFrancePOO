import Etapa from "../models/Etapas.js";


const getEtapa = async (req,res) => {
    const allEtapas = await Etapa.find();
    res.json(allEtapas);
}

const postEtapa = async (req,res) => {
    const añadirEtapa = new Etapa(req.body);
    try {
        const etapa = await añadirEtapa.save();
        res.json(etapa);
    } catch (error) {
        console.log(error);
    }
};

const deleteEtapa = async  (req,res) => {
    try {
        await Etapa.deleteOne({_id:req.params.id});
        res.status(204).send()
    } catch (error) {
        console.log(error);
    }
}

const updateEtapa = async(req,res) =>{
    try {
        const editar = Etapa.findOne({_id:req.params.id});
        if(req.body.etapa){
            editar.etapa = req.body.etapa
        }
        if(req.body.tipo){
            editar.tipo = req.body.tipo
        }
        if(req.body.fecha){
            editar.fecha = req.body.fecha
        }
        if(req.body.distancia){
            editar.fecha = req.body.distancia
        }
        await editar.save();
        res. send(editar);
    } catch (error) {
        console.log(error);
    }
}

export {getEtapa , postEtapa , deleteEtapa , updateEtapa};
