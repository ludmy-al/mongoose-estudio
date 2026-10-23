// import { UserModel } from "../models/user.model.js";
import { TaskModel } from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const { title, descrption, author } = req.body;

    const newTask = TaskModel.create({
      title,
      description,
      author,
    });

    return res.status(201).json({
      msg: "Tarea creado correctamente",
      data: newTask,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getAllUsers = async (req, res) => {
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

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await TaskModel.findById(id);

    return res.status(200).json({
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    const updateUser = await TaskModel.findByIdAndUpdate(
      id,
      { username },
      { returnDocument: "after" },
    );

    return res.status(200).json({
      data: updateUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};
