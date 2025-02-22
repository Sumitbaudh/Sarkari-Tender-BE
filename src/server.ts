import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { connectDB } from "./config/database";
import app from "./app";
import { setupWebSockets } from "./sockets/socket";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;

const startServer = async () => {
    await connectDB(); // MongoDB Connection

    const server = createServer(app); // Express Server
    const io = new Server(server, { cors: { origin: "*" } });

    setupWebSockets(io); // WebSockets Setup

    // ✅ Corrected this line (use `server.listen`, not `app.listen`)
    server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

startServer();
