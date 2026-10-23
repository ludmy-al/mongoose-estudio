import { model, Schema } from "mongoose";

const roleSchema = new Schema({
  rolename: {
    type: String,
    require: true,
  },
});

export const RoleModel = model("Role", roleSchema);
