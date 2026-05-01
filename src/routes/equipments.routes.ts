import { Router } from "express";
import * as equipmentsController from "../controllers/equipements.controller";

const equipmentsRouter = Router();

/**
 * @openapi
 * /equipments:
 *   get:
 *     summary: Lista todos os equipamentos
 *     tags:
 *       - Equipments
 *     responses:
 *       200:
 *         description: Lista de equipamentos retornada com sucesso
 */
equipmentsRouter.get("/equipments", equipmentsController.getAllEquipments);

/**
 * @openapi
 * /equipments:
 *   post:
 *     summary: Adiciona um novo equipamento
 *     tags:
 *       - Equipments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               code:
 *                 type: string
 *               location:
 *                 type: string
 *               status:
 *                 type: string
 *             required:
 *               - name
 *               - code
 *               - location
 *               - status
 *     responses:
 *       201:
 *         description: Equipamento criado com sucesso
 *       400:
 *         description: Requisicao invalida
 */
equipmentsRouter.post("/equipments", equipmentsController.addEquipment);

/**
 * @openapi
 * /equipments/{id}:
 *   get:
 *     summary: Busca um equipamento pelo ID
 *     tags:
 *       - Equipments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do equipamento
 *     responses:
 *       200:
 *         description: Equipamento retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: uuid
 *                 name:
 *                   type: string
 *                 code:
 *                   type: string
 *                 location:
 *                   type: string
 *                 status:
 *                   type: string
 */

equipmentsRouter.get("/equipments/:id", equipmentsController.getEquipmentById);

/**
 * @openapi
 * /equipments/{id}:
 *   put:
 *     summary: Atualiza um equipamento pelo ID
 *     tags:
 *       - Equipments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do equipamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               code:
 *                 type: string
 *               location:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Equipamento atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                 name:
 *                   type: string
 *                 code:
 *                   type: string
 *                 location:
 *                   type: string
 *                 status:
 *                   type: string
 */
equipmentsRouter.put("/equipments/:id", equipmentsController.updateEquipment);

/**
 * @openapi
 * /equipments/{id}:
 *   delete:
 *     summary: Remove um equipamento pelo ID
 *     tags:
 *       - Equipments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do equipamento
 *     responses:
 *       204:
 *         description: Equipamento removido com sucesso
 */

equipmentsRouter.delete("/equipments/:id", equipmentsController.deleteEquipment);

export { equipmentsRouter };
