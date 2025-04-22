import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middleware/errorMiddleware.js";
import routes from "./routes/index.js";
import dbConnection from "./utils/connectDB.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

dotenv.config();

dbConnection();

const port = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: true, // <- allow dynamic origin
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(morgan("dev"));
app.use("/api", routes);

// === Static Files for Production ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on ${port}`));
