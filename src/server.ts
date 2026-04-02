import { app } from "./app";
import sql from "./config/connection";

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
