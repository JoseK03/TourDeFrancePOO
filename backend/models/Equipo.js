import mongoose from "mongoose";

const equipoSchema = mongoose.Schema(process.env.MONGO_URI,{
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
        timestamps:true
    }
    );

    const Equipo = mongoose.model("equipos", equipoSchema, "equipo");

    export default Equipo;