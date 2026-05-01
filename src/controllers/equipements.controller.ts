import { Request, Response} from "express";
import * as equipmentsService from "../services/equipments.service"
import { UUID } from "node:crypto";

export async function getAllEquipments(req: Request, res: Response) {
    const equipments = await equipmentsService.getAllEquipments();
    return res.status(200).json(equipments)
    
}

export async function addEquipment(req: Request, res: Response) {
    const { name, code, location, status } = req.body;
    const newEquipment = await equipmentsService.addEquipment(name, code, location, status);
    return res.status(201).json(newEquipment);
}

export async function getEquipmentById(req: Request, res: Response) {
    const { id } = req.params;
    const equipment = await equipmentsService.getEquipmentById(id as UUID);
    return res.status(200).json(equipment);
}

export async function updateEquipment(req: Request, res: Response) {
    const { id } = req.params;
    const { name, code, location, status } = req.body;
    const updatedEquipment = await equipmentsService.updateEquipment(id as UUID, name, code, location, status);
    return res.status(200).json(updatedEquipment);
}

export async function deleteEquipment(req: Request, res: Response) {
    const { id } = req.params;
    await equipmentsService.deleteEquipment(id as UUID);
    return res.status(204).send();
}