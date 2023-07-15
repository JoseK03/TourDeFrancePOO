import { getCiclistas , postCiclistas , deleteCiclistas , updateCiclistas } from "../controllers/ciclistas.controllers.js";
import {Router} from "express";

const router = Router();

router.get("/all", getCiclistas);
router.post("/add", postCiclistas);
router.delete("/del", deleteCiclistas);
router.patch("/upd" , updateCiclistas);

export default router;
