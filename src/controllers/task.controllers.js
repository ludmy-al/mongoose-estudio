import { UserModel } from "../models/user.model.js";

export const createTask = async (req, res) => {
  try {
    const { username, password, email, addressed } = req.body;

    const newTask = TaskModel.create({
      title,
      description,
      author,
    });

    return res.status(201).json({
      msg: "Usuario creado correctamente",
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
    const usertasks = await TaskModel.find().populate();

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
