import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import { config } from "dotenv";
import { startDB } from "./src/config//database.js";
// import { UserModel } from "./src/models/user.model.js";
import { userRouter } from "./src/routes/user.router.js";
import { taskRouter } from "./src/routes/task.routes.js";
import { roleRouter } from "./src/routes/role.routes.js";

config();

const app = express();
const PORT = process.env.PORT || 3005;

//middlewares
app.use(express.json()); //para que el servidor entienda el JSON al hacer POSTs
app.use(cookieParser); //para leer las cookies
app.use(cors()); //para hacer consultas

// rutas
app.use("/api", userRouter);
app.use("/api", taskRouter);
app.use("/api", roleRouter);

app.listen(PORT, async () => {
  await startDB();
  console.log(`servidor listo en el puerto ${PORT}`);
});
