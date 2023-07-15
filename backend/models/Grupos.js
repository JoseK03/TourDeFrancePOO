import mongoose from "mongoose";

const grupoSchema = mongoose.Schema({
    equipo:{
        type:String,
        required:true,
        trim:true
    },
    integrantes:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timesTamps:true
    }
    )

    const Grupo = mongoose.model("grupos",grupoSchema, "grupos");
    export default Grupo;