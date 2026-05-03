import { UUID } from "node:crypto";
import * as usersRepository from "../repositories/users.repository";
import bcrypt from "bcryptjs";

export async function getAllUsers() {
    const users = await usersRepository.getAllUsers();
    return users;
}

export async function addUser(name: string, email: string, password: string, role?: string) {
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);
    const newUser = await usersRepository.addUser({ name, email, password_hash, role });
    return newUser;
}

export async function getUserById(id: UUID) {
    const user = await usersRepository.getUserById(id);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

export async function updateUser(id: UUID, name?: string, email?: string, password_hash?: string, role?: string) {
    await getUserById(id);
    const updatedUser = await usersRepository.updateUser(id, { name, email, password_hash, role });
    return updatedUser;
}

export async function deleteUser(id: UUID) {
    await getUserById(id);
    await usersRepository.deleteUser(id);
}
