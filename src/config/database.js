import mongoose from "mongoose";
export const startDB = async () => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/test");

    // await mongoose.connection.dropCollection("user");

    console.log("conectado con la DB correctamente");
  } catch (error) {
    console.log("no se pudo conectar con la DB", error);
  }
};
