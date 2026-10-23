import { model, Schema, Types, version } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  adresses: [
    {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
  ],
  role: [
    {
      type: Types.ObjectId,
      ref: "Role",
      required: true,
    },
  ],

  versionKey: false,
});

export const UserModel = model("User", userSchema);
