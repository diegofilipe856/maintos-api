import { Router } from "express";
import * as usersController from "../controllers/users.controller";

const usersRouter = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 */
usersRouter.get("/users", usersController.getAllUsers);

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Adiciona um novo usuário
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password_hash:
 *                 type: string
 *               role:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password_hash
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Requisição inválida
 */
usersRouter.post("/users", usersController.addUser);

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário retornado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
usersRouter.get("/users/:id", usersController.getUserById);

/**
 * @openapi
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password_hash:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
usersRouter.put("/users/:id", usersController.updateUser);

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     summary: Remove um usuário pelo ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
usersRouter.delete("/users/:id", usersController.deleteUser);

export { usersRouter };
