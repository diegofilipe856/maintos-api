import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as usersRepository from "../repositories/users.repository";

const JWT_SECRET = process.env.JWT_SECRET || "maintos-secret-key";

export async function login(email: string, password: string) {
    const user = await usersRepository.getUserByEmail(email);
    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: "1d" }
    );

    return { user, token };
}
