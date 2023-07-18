import {Schema,model,mongoose} from "mongoose";

const ciclistasSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true, 'El nombre es requerido']
    },
    edad:{
        type:String,
        required:[true, 'La edad es requerida']
    },
    estatura:{
        type:String,
        required:[true, 'La estatura es requerida']
    },
    equipo:{
        type:String,
        required:[true, 'El equipo es requerido']
    }
    },
    {
        timestamps:true
    }
    );

    const Ciclistas = mongoose.model("ciclistas", ciclistasSchema , "ciclistas");

    export default Ciclistas;