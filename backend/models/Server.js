import express from "express";
import cors from "cors";
import grupoRouter from "../routes/grupos.routes.js";
import ciclistasRouter from "../routes/ciclistas.routes.js";
import equipoRouter from "../routes/equipo.routes.js";
import etapasRouter from "../routes/etapas.routes.js";

class Server{

    constructor(){
        this.app = express();

        this.port = process.env.PORT
        this.ciclistasPath = '/api/ciclistas';
        this.equipoPath = '/api/equipos';
        this.etapasPath = '/api/etapas';
        this.gruposPath = '/api/grupos';


        //!middlewares
        this.middlewares();
        
        //!Rutas
        this.routes();
    }

    middlewares(){
        //*cors
        this.app.use(cors());

        //*Pulict directory
        this.app.use(express.static('public'));
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.ciclistasPath,grupoRouter);
        this.app.use(this.equipoPath,ciclistasRouter);
        this.app.use(this.etapasPath,equipoRouter);
        this.app.use(this.gruposPath,etapasRouter);
    }

    listenner(){
        this.app.listen(this.port,()=>{
            console.log(`puerto: ${this.port}`);
        })
    }
}

export default Server;
