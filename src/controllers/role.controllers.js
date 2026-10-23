export const createRole = async (req, res) => {
  try {
    const { rolename } = req.body;
    const newRole = await RoleModel.create({
      rolename,
    });

    return res.status(201).json({
      msg: "Tarea creada correctamente",
      data: newRole,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getAllRoles = async (req, res) => {
  try {
    const role = await RoleModel.find().populate("role");

    return res.status(200).json({
      msg: "Se encontró todas las tareas",
      data: tasks,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};
