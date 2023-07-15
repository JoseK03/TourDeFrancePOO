import Equipo from "../models/Equipo.js";

const getEquipo = async (req,res) =>{
    const obtener = Equipo.find();
    res.json(obtener);
}

const postEquipo = async (req,res) =>{
    const agregar = await Equipo.send();
    try {
        const nuevo = agregar.save();
        res.json(nuevo);
    } catch (error) {
        console.log(error);
    }
}

const deleteEquipo = async (req,res) => {
    try {
        await Equipo.deleteOne({_id:req.params.id});
        res.send();
    } catch (error) {
        console.log(error);
    }
}

const updateEquipo = async (req, res) => {
    try {
        const editar = Equipo.findOne({_id:req.params.id});
      if(req.body.equipo){
        editar.equipo = req.body.equipo
      }
      if(req.body.integrantes){
        editar.integrantes = req.body.integrantes
      }
      await editar.save();
      res.send(editar);
    } catch (error) {
        console.log(error);
    }
}

export {getEquipo, postEquipo, deleteEquipo , updateEquipo};