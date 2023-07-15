import expres from "express";
const router = expres.Router();

import { addGrupo , getGrupo , delGrupo , updGrupo } from "../controllers/grupos.controllers.js";

router.get("/all", getGrupo);
router.post("/add", addGrupo);
router.delete("/del/:id", delGrupo);
router.patch("/upd/:id",updGrupo);

export default router;