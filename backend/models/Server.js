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
        this.app.use(this.ciclistasPath,ciclistasRouter);
        this.app.use(this.equipoPath,equipoRouter);
        this.app.use(this.etapasPath,etapasRouter);
        this.app.use(this.gruposPath,grupoRouter);
    }

    listenner(){
        this.app.listen(this.port,()=>{
            console.log(`puerto: ${this.port}`);
        })
    }
}

export default Server;
