import { UUID } from "node:crypto";
import * as equipmentsRepository from "../repositories/equipments.repository";

export async function getAllEquipments() {
    const equipments = await equipmentsRepository.getAllEquipments();
    return equipments;
}
export async function addEquipment(name: string, code: string, location: string, status: string) {
    const newEquipment = await equipmentsRepository.addEquipment(name, code, location, status);
    return newEquipment;
}

export async function getEquipmentById(id: UUID) {
    const equipment = await equipmentsRepository.getEquipmentById(id);
    if (!equipment) {
        throw new Error("Equipment not found");
    }
    return equipment;
}

export async function updateEquipment(id:UUID, name: string, code: string, location: string, status: string) {
    const equipment = await getEquipmentById(id)
    const updatedEquipment = await equipmentsRepository.updateEquipment(id, name || equipment.name, code || equipment.code, location || equipment.location, status || equipment.status);
    return updatedEquipment;
}

export async function deleteEquipment(id: UUID) {
    await getEquipmentById(id)
    await equipmentsRepository.deleteEquipment(id);
}