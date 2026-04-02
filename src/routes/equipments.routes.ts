import { Router } from "express";
import * as equipmentsController from "../controllers/equipements.controller";

const equipmentsRouter = Router();

equipmentsRouter.get("/equipments", equipmentsController.getAllEquipments);

export { equipmentsRouter };
