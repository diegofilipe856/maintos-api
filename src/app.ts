import express from "express";
import cors from "cors";
import { equipmentsRouter } from "./routes/equipments.routes";
import { setupSwagger } from "./config/swagger";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(equipmentsRouter)
setupSwagger(app);

app.get("/", (req, res) => {
  return res.json({ message: "MaintOS API running 🚀" });
});
