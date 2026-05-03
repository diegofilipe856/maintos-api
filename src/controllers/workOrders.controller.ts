import { Request, Response } from "express";
import * as workOrdersService from "../services/workOrders.service";
import { UUID } from "node:crypto";

export async function getAllWorkOrders(req: Request, res: Response) {
    const workOrders = await workOrdersService.getAllWorkOrders();
    return res.status(200).json(workOrders);
}

export async function addWorkOrder(req: Request, res: Response) {
    const { title, description, status, priority, equipment_id, technician_id } = req.body;
    const newWorkOrder = await workOrdersService.addWorkOrder({
        title,
        description,
        status,
        priority,
        equipment_id: equipment_id as UUID,
        technician_id: technician_id as UUID
    });
    return res.status(201).json(newWorkOrder);
}

export async function getWorkOrderById(req: Request, res: Response) {
    const { id } = req.params;
    const workOrder = await workOrdersService.getWorkOrderById(id as UUID);
    return res.status(200).json(workOrder);
}

export async function updateWorkOrder(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, status, priority, technician_id, closed_at } = req.body;
    const updatedWorkOrder = await workOrdersService.updateWorkOrder(id as UUID, {
        title,
        description,
        status,
        priority,
        technician_id: technician_id as UUID,
        closed_at
    });
    return res.status(200).json(updatedWorkOrder);
}

export async function deleteWorkOrder(req: Request, res: Response) {
    const { id } = req.params;
    await workOrdersService.deleteWorkOrder(id as UUID);
    return res.status(204).send();
}
