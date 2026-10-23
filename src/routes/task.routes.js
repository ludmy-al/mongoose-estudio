import { Router } from "express";
import { createTask, getAllTask } from "../controller/task.controlers.js";

export const taskRouter = Router();

taskRouter.post("/task", createTask);
taskRouter.get("/task", getAllTask);
