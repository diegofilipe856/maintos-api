import { User } from '../models/user.model';
import { sql } from 'slonik';

export async function getAllUsers() {
    const users = await sql`SELECT * FROM users`;
    return users;
}

export async function getUserById(id: UUID) {
    const [user] = await sql`SELECT * FROM users WHERE id = ${id}`;
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

export async function addUser(user: User) {
    const [newUser] = await sql`
        INSERT INTO users (name, email, password)
        VALUES (${user.name}, ${user.email}, ${user.password})
        RETURNING *
    `;
    return newUser;
}

export async function updateUser(id: UUID, user: User) {
    const updatedUser = await getUserById(id);
    if (!updatedUser) {
        throw new Error("User not found");
    }
    const [result] = await sql`
        UPDATE users
        SET name = ${user.name || updatedUser.name}, email = ${user.email || updatedUser.email},
            password = ${user.password || updatedUser.password}
        WHERE id = ${id}
        RETURNING *
    `;
    return result;
}

export async function deleteUser(id: UUID) {
    const user = await getUserById(id);
    if (!user) {
        throw new Error("User not found");
    }
    await sql`
        DELETE FROM users WHERE id = ${id}
    `;
}
