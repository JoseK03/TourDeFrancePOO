import Router from "express";
import {getEtapa , postEtapa , deleteEtapa , updateEtapa} from "../controllers/etapas.controllers.js"

const router = Router();



router.get("/all", getEtapa);
router.post("/add", postEtapa);
router.delete("/del", deleteEtapa);
router.patch("/upd", updateEtapa);

export default router;