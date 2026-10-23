import { TaskModel } from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const { title, descrption, author } = req.body;
    const newTask = await TaskModel.create({
      title,
      descrption,
      author,
    });

    return res.status(201).json({
      msg: "Tarea creada correctamente",
      data: newTask,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const tasks = await TaskModel.find().populate("author", "password");

    return res.status(200).json({
      msg: "Se encontró todas las tareas",
      data: tasks,
    });
  } catch (error) {
    //para ver error en la consola
    console.log(error);
    //respuesta que verá quien realiza la petición
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};
