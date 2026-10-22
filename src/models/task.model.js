import { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    descriptionds: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      ref: "User",
      require: true,
      //unique: true,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  },
);
