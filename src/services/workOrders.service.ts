import { UUID } from "node:crypto";
import * as workOrdersRepository from "../repositories/workOrders.repository";
import * as equipmentsRepository from "../repositories/equipments.repository";
import * as usersRepository from "../repositories/users.repository";

export async function getAllWorkOrders() {
    return await workOrdersRepository.getAllWorkOrders();
}

export async function getWorkOrderById(id: UUID) {
    const workOrder = await workOrdersRepository.getWorkOrderById(id);
    if (!workOrder) {
        throw new Error("Work Order not found");
    }
    return workOrder;
}

export async function addWorkOrder(data: {
    title: string;
    description: string;
    status: string;
    priority: string;
    equipment_id: UUID;
    technician_id: UUID;
}) {
    // Validate existence of equipment and technician
    const equipment = await equipmentsRepository.getEquipmentById(data.equipment_id);
    if (!equipment) throw new Error("Equipment not found");

    const technician = await usersRepository.getUserById(data.technician_id);
    if (!technician) throw new Error("Technician not found");

    return await workOrdersRepository.addWorkOrder(data);
}

export async function updateWorkOrder(id: UUID, data: {
    title?: string;
    description?: string;
    status?: string;
    priority?: string;
    technician_id?: UUID;
    closed_at?: Date | null;
}) {
    await getWorkOrderById(id);

    if (data.technician_id) {
        const technician = await usersRepository.getUserById(data.technician_id);
        if (!technician) throw new Error("Technician not found");
    }

    return await workOrdersRepository.updateWorkOrder(id, data);
}

export async function deleteWorkOrder(id: UUID) {
    await getWorkOrderById(id);
    await workOrdersRepository.deleteWorkOrder(id);
}
