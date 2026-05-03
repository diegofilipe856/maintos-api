import { Request, Response } from "express";
import * as usersService from "../services/users.service";
import { UUID } from "node:crypto";

export async function getAllUsers(req: Request, res: Response) {
    const users = await usersService.getAllUsers();
    return res.status(200).json(users);
}

export async function addUser(req: Request, res: Response) {
    const { name, email, password, role } = req.body;
    const newUser = await usersService.addUser(name, email, password, role);
    return res.status(201).json(newUser);
}

export async function getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await usersService.getUserById(id as UUID);
    return res.status(200).json(user);
}

export async function updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    const updatedUser = await usersService.updateUser(id as UUID, name, email, password, role);
    return res.status(200).json(updatedUser);
}

export async function deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await usersService.deleteUser(id as UUID);
    return res.status(204).send();
}
