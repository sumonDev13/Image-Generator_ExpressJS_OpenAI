import express from "express";
import router from "./routes/openaiRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => console.log(`Server started on port ${port}`));
