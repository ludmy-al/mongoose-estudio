const { model, Schema } from "mongoose";

const roleSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
        },
    },
    {
        timestamp: true,
        versionKey: false
    },
)