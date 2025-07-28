import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import reservationRoutes from "./routes/reservationRoute.js"; // ✅ correct path

const app = express();

dotenv.config();

dbConnection();

app.use(cors());
app.use(express.json());


// ✅ Register the route
app.use("/reservation", reservationRoutes); 

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
