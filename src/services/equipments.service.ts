import * as equipmentsRepository from "../repositories/equipments.repository";

export async function getAllEquipments() {
    const equipments = await equipmentsRepository.getAllEquipments();
    return equipments;
}