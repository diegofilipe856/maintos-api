import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const authRouter = Router();

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
authRouter.post("/auth/login", authController.login);

export { authRouter };
