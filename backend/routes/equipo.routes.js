import Router from "express";

import {getEquipo , postEquipo , deleteEquipo , updateEquipo} from "../controllers/equipo.controllers.js"

const router = Router();

router.get("/all", getEquipo);
router.post("/add", postEquipo);
router.delete("/del", deleteEquipo);
router.patch("/upd", updateEquipo);

export default router;

