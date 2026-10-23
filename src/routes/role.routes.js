import { Router } from "express";
import { createRole, getAllRole } from "../controller/role.controlers";

export const roleRouter = Router();

roleRouter.post("/role", createRole);
roleRouter.get("/role", getAllRole);
