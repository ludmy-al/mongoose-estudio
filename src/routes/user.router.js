import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controllers";

export const useRouter = Router();

// Ruta para crear un usuario
useRouter.post("/users", createUser);

// Ruta para traer los usuarios
useRouter.get("/users", getAllUsers);

// Ruta para traer un usuario por id
useRouter.get("/users/:id", getUserById);

// Ruta para actualizar un usuario
useRouter.put("/users/:id", updateUser);

// Ruta para eliminar un usuario
useRouter.delete("/users/:id", deleteUser);
