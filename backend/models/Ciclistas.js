import mongoose from "mongoose";

const ciclistasSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    edad:{
        type:String,
        required:true,
        trim:true
    },
    estatura:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timestamps:true
    }
    );

    const Ciclistas = mongoose.model("ciclistas", ciclistasSchema , "ciclistas");

    export default Ciclistas;