import express from "express";
import cors from "cors";
import { equipmentsRouter } from "./routes/equipments.routes";
import { usersRouter } from "./routes/users.routes";
import { workOrdersRouter } from "./routes/workOrders.routes";
import { authRouter } from "./routes/auth.routes";
import { setupSwagger } from "./config/swagger";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(authRouter)
app.use(equipmentsRouter)
app.use(usersRouter)
app.use(workOrdersRouter)
setupSwagger(app);

app.get("/", (req, res) => {
  return res.json({ message: "MaintOS API running 🚀" });
});
