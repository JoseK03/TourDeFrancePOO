import mongoose from "mongoose";

const etapaSchema = mongoose.Schema({
    etapa:{
        type:String,
        required:true,
        trim:true
    },
    tipo:{
        type:String,
        required:true,
        trim:true
    },
    fecha:{
        type:String,
        required:true,
        trim:true
    },
    distancia:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timestamps: true
    }
    );

    const Etapa = mongoose.model("etapa", etapaSchema,"etapas");
    export default Etapa;