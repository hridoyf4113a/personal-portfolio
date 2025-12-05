import express from "express";
import "dotenv/config";
import cors from "cors";
import ConnectDatabase from "../database/connection.js";
import projectRoute from "../routes/project.routes.js";
import contactRoute from "../routes/contact.routes.js";

const app = express();
ConnectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/projects", projectRoute);
app.use("/contact", contactRoute);

export default app;
