import sql from "../config/connection";

export async function getAllEquipments() {
    const equipments = await sql`SELECT * FROM equipments_maintos ORDER BY created_at DESC`;
    return equipments;
}