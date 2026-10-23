import { UserModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { username, password, email, addressed, roles } = req.body;

    const newUser = UserModel.create({
      username,
      email,
      password,
      adresses,
      roles,
    });

    return res.status(201).json({
      msg: "Usuario creado correctamente",
      data: newUser,
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
    const users = await UserModel.find().populate("roles");

    return res.status(200).json({
      msg: "Se encontro todos los usuarios",
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

    // const users = await UserModel.findById(id);
    const userById = await UserModel.findById(req.params);

    return res.status(200).json({
      msg: "Se encontró usuario por id",
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

    const updateUser = await UserModel.findByIdAndUpdate(
      id,
      { username },
      { returnDocument: "after" },
    );

    return res.status(200).json({
      msg: "Se actualizo usuario",
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
    const { id } = req.params;
    const delateUser = await UserModel.findByIdAndDelete(id);

    return res.status(200).json({
      msg: "Usuario eliminado",
      data: delateUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};
