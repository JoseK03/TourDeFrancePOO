import { getCiclistas , postCiclistas , deleteCiclistas , updateCiclistas } from "../controllers/ciclistas.controllers.js";
import {Router} from "express";
import {check} from "express-validator";
import Equipo from "../models/Equipo.js";
import validateDocuments from "../middlewares/validate.doocuments.js";


const router = Router();

router.get("/all", getCiclistas);
router.post("/add",[
    check('nombre','el nombre es obligatorio').not().isEmpty(),
    check('edad','la edad es obligatorio').not().isEmpty(),
    check('estatura','la estatura es obligatoria').not().isEmpty(),
    check('equipo').custom(async(equipo='')=>{
        const existeEquipo = await Equipo.findOne({equipo});
        if(!existeEquipo){
            throw new Error(`El equipo ${equipo} no esta registrado en la base de datos`)
        }
    }),validateDocuments], postCiclistas);
router.delete("/del", deleteCiclistas);
router.patch("/upd" , updateCiclistas);

export default router;
