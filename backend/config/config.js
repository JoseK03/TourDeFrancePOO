import mongoose from "mongoose";

const conectarDB = async (req,res) =>{
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        const url = `este es el host: ${connectDB.connection.host} y puerto : ${connectDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(error);
    }
};

export default conectarDB;