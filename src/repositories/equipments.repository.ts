import { UUID } from "node:crypto";
import sql from "../config/connection";

export async function getAllEquipments() {
    const equipments = await sql`SELECT * FROM equipments_maintos ORDER BY created_at DESC`;
    return equipments;
}

export async function addEquipment(name: string, code: string, location: string, status: string) {
    const [newEquipment] = await sql`
        INSERT INTO equipments_maintos (name, code, location, status)
        VALUES (${name}, ${code}, ${location}, ${status})
        RETURNING *
    `;
    return newEquipment;
}

export async function getEquipmentById(id: UUID) {
    const [equipment] = await sql`
        SELECT * FROM equipments_maintos WHERE id = ${id}
    `;
    return equipment;
}

export async function updateEquipment(id: UUID, name: string, code: string, location: string, status: string) {
    const [updatedEquipment] = await sql`
        UPDATE equipments_maintos
        SET name = ${name}, code = ${code}, location = ${location}, status = ${status}
        WHERE id = ${id}
        RETURNING *
    `;
    return updatedEquipment;
}

export async function deleteEquipment(id: UUID) {
    await sql`
        DELETE FROM equipments_maintos WHERE id = ${id}
    `;
}