'use client'
import http from "http";
import app from "./app.js";
const port = process.env.PORT || 4001;

const server = http.createServer(app);
server.listen(port, () => console.log(`server is running on port ${port}`));
