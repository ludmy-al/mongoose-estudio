import { model, Schema } from "mongoose";
import { UserModel } from "./";
import { type, version } from "node:os";

const userSchema = new Schema({
  username: {
    type: string,
    require: true,
    unique: true,
  },
  email: {
    type: string,
    require: true,
    unique: true,
  },
  password: {
    type: string,
    require: true,
  },
  addreessed: [
    {
      _id_false,
      street: {
        type: string,
        require: true,
      },
      city: {
        type: string,
        require: true,
      },
      country: {
        type: string,
        require: true,
      },
    },
  ],
});
{
  versionKey: false;
}
export const UserModel = model("User", userSchema);
