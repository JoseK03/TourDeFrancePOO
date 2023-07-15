import Ciclistas from "../models/Ciclistas.js";

const getCiclistas = async (req,res) => {
    const obtener = await Ciclistas.find();
    res.json(obtener);
}

const postCiclistas = async (req,res) => {
    const nuevoCiclista = new Ciclistas(req.body);
    try {
        const agregar = nuevoCiclista.save();
        res.json(agregar);
    } catch (error) {
        console.log(error);
    }
}

const deleteCiclistas = async (req,res) => {
    try {
        await Ciclistas.deleteOne({_id:req.params.id});
        res.send();
    } catch (error) {
        console.log(error);
    }
}

const updateCiclistas = async (req,res) => {
    try {
        const editar = Ciclistas.findOne({_id:req.params.id});
        if(req.body.nombre){
            editar.nombre = req.body.nombre
        }
        if(req.body.edad){
            editar.edad = req.body.edad
        }
        if(req.body.estatura){
            editar.estatura = req.body.estatura
        }
        await editar.save();
        res.send(editar);
    } catch (error) {
        console.log(error);
    }
}

export {getCiclistas , postCiclistas , deleteCiclistas , updateCiclistas}