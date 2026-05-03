import { UUID } from "node:crypto";
import sql from "../config/connection";

export type WorkOrder = {
  id: UUID;
  title: string;
  description: string;
  status: string;
  priority: string;
  equipment_id: UUID;
  technician_id: UUID;
  opened_at: Date;
  closed_at: Date | null;
  created_at: Date;
};

export async function getAllWorkOrders() {
  const workOrders = await sql`SELECT * FROM work_orders_maintos ORDER BY created_at DESC`;
  return workOrders;
}

export async function getWorkOrderById(id: UUID) {
  const [workOrder] = await sql`
        SELECT * FROM work_orders_maintos WHERE id = ${id}
    `;
  return workOrder;
}

export async function addWorkOrder(workOrder: {
  title: string;
  description: string;
  status: string;
  priority: string;
  equipment_id: UUID;
  technician_id: UUID;
}) {
  const [newWorkOrder] = await sql`
        INSERT INTO work_orders_maintos (title, description, status, priority, equipment_id, technician_id)
        VALUES (${workOrder.title}, ${workOrder.description}, ${workOrder.status}, ${workOrder.priority}, ${workOrder.equipment_id}, ${workOrder.technician_id})
        RETURNING *
    `;
  return newWorkOrder;
}

export async function updateWorkOrder(
  id: UUID,
  workOrder: {
    title?: string;
    description?: string;
    status?: string;
    priority?: string;
    technician_id?: UUID;
    closed_at?: Date | null;
  }
) {
  const [updatedWorkOrder] = (await sql`
        UPDATE work_orders_maintos
        SET title = COALESCE(${workOrder.title ?? null}, title),
            description = COALESCE(${workOrder.description ?? null}, description),
            status = COALESCE(${workOrder.status ?? null}, status),
            priority = COALESCE(${workOrder.priority ?? null}, priority),
            technician_id = COALESCE(${workOrder.technician_id ?? null}, technician_id),
            closed_at = COALESCE(${workOrder.closed_at ?? null}, closed_at)
        WHERE id = ${id}
        RETURNING *
    `) as WorkOrder[];
  return updatedWorkOrder;
}

export async function deleteWorkOrder(id: UUID) {
  await sql`
        DELETE FROM work_orders_maintos WHERE id = ${id}
    `;
}
