import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
        const result = await authService.login(email, password);
        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(401).json({ message: error.message });
    }
}
