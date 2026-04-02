import express from "express";
import cors from "cors";
import { equipmentsRouter } from "./routes/equipments.routes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(equipmentsRouter)

app.get("/", (req, res) => {
  return res.json({ message: "MaintOS API running 🚀" });
});
