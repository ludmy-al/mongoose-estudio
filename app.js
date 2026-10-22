import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import "dotenv/config";
import { config } from "dotenv";
import { startDB } from "./src/config//database.js";
// import { UserModel } from "./src/models/user.model.js";
import { userRouter } from "./src/routes/user.router.js";

config();

const app = express();
const PORT = process.env.PORT || 3005;

//middlewares
app.use(express.json());
app.use(cookieParser);
app.use(cors());

// rutas
app.use("/api", userRouter);

app.listen(PORT, async () => {
  await startDB();
  console.log(`servidor listo en el puerto ${PORT}`);
});
