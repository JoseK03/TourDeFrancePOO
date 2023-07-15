import Grupo from "../models/Grupos.js";

const getGrupo = async (req,res) =>{
    const allGrupo = await Grupo.find();
    res.json(allGrupo);
}

const addGrupo = async (req,res) =>{
    const añadirGrupo = new Grupo(req.body);
    try {
        const grupo = await añadirGrupo.save();
        res.json(grupo);
    } catch (error) {
        console.log(error);
    }
}

const delGrupo = async (req,res) =>{
    try {
        await Grupo.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updGrupo = async (req,res) =>{
    try {
        const editar = Grupo.findOne({_id:req.params.id});
        if(req.body.equipo){
            editar.equipo = req.body.equipo
        }
        if(req.body.integrantes){
            editar.integrantes = req.body.integrantes
        }
        await editar.save();
        res.send(editar);
    } catch (error) {
        
    }
}

export {getGrupo , addGrupo , delGrupo , updGrupo};