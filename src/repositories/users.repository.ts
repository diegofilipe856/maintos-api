import { UUID } from "node:crypto";
import sql from "../config/connection";

type User = {
  id: UUID;
  name: string;
  email: string;
  password_hash: string;
  role?: string;
  created_at: Date;
  updated_at: Date;
};

export async function getAllUsers() {
  const users = await sql`SELECT * FROM users_maintos ORDER BY created_at DESC`;
  return users;
}

export async function getUserById(id: UUID) {
  const [user] = await sql`
        SELECT * FROM users_maintos WHERE id = ${id}
    `;
  return user;
}

export async function getUserByEmail(email: string) {
  const [user] = await sql`
        SELECT * FROM users_maintos WHERE email = ${email}
    `;
  return user;
}

export async function addUser(user: {
  name: string;
  email: string;
  password_hash: string;
  role?: string;
}) {
  const [newUser] = await sql`
        INSERT INTO users_maintos (name, email, password_hash, role)
        VALUES (${user.name}, ${user.email}, ${user.password_hash}, ${user.role ?? null})
        RETURNING *
    `;
  return newUser;
}

export async function updateUser(
  id: UUID,
  user: { name?: string; email?: string; password_hash?: string; role?: string }
) {
  const [updatedUser] = (await sql`
        UPDATE users_maintos
        SET name = COALESCE(${user.name ?? null}, name), 
            email = COALESCE(${user.email ?? null}, email),
            password_hash = COALESCE(${user.password_hash ?? null}, password_hash),
            role = COALESCE(${user.role ?? null}, role)
        WHERE id = ${id}
        RETURNING *
    `) as User[];
  return updatedUser;
}

export async function deleteUser(id: UUID) {
  await sql`
        DELETE FROM users_maintos WHERE id = ${id}
    `;
}
