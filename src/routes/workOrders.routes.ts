import { Router } from "express";
import * as workOrdersController from "../controllers/workOrders.controller";

const workOrdersRouter = Router();

/**
 * @openapi
 * /work-orders:
 *   get:
 *     summary: Lista todas as ordens de serviço
 *     tags:
 *       - Work Orders
 *     responses:
 *       200:
 *         description: Lista de ordens de serviço retornada com sucesso
 */
workOrdersRouter.get("/work-orders", workOrdersController.getAllWorkOrders);

/**
 * @openapi
 * /work-orders:
 *   post:
 *     summary: Adiciona uma nova ordem de serviço
 *     tags:
 *       - Work Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *               priority:
 *                 type: string
 *               equipment_id:
 *                 type: string
 *                 format: uuid
 *               technician_id:
 *                 type: string
 *                 format: uuid
 *             required:
 *               - title
 *               - description
 *               - equipment_id
 *               - technician_id
 *     responses:
 *       201:
 *         description: Ordem de serviço criada com sucesso
 */
workOrdersRouter.post("/work-orders", workOrdersController.addWorkOrder);

/**
 * @openapi
 * /work-orders/{id}:
 *   get:
 *     summary: Busca uma ordem de serviço pelo ID
 *     tags:
 *       - Work Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Ordem de serviço retornada com sucesso
 */
workOrdersRouter.get("/work-orders/:id", workOrdersController.getWorkOrderById);

/**
 * @openapi
 * /work-orders/{id}:
 *   put:
 *     summary: Atualiza uma ordem de serviço pelo ID
 *     tags:
 *       - Work Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *               priority:
 *                 type: string
 *               technician_id:
 *                 type: string
 *                 format: uuid
 *               closed_at:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Ordem de serviço atualizada com sucesso
 */
workOrdersRouter.put("/work-orders/:id", workOrdersController.updateWorkOrder);

/**
 * @openapi
 * /work-orders/{id}:
 *   delete:
 *     summary: Remove uma ordem de serviço pelo ID
 *     tags:
 *       - Work Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       204:
 *         description: Ordem de serviço removida com sucesso
 */
workOrdersRouter.delete("/work-orders/:id", workOrdersController.deleteWorkOrder);

export { workOrdersRouter };
