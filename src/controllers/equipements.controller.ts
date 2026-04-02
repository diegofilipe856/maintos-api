import { Request, Response} from "express";
import * as equipmentsService from "../services/equipments.service"

export async function getAllEquipments(req: Request, res: Response) {
    const equipments = await equipmentsService.getAllEquipments();
    return res.status(200).json(equipments)
    
}