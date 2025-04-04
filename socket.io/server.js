import express from "express";
import http from "http";
import socketIo from "socket.io";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// Get the current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on("connection", (socket) => {
    console.log("A connection has been made");
    socket.emit("welcome", "Welcome to the server!");

    socket.on("chat message", (msg) => {
        console.log("Message received", msg);
        // socket.emit
    });

    socket.on("disconnect", () => {
        console.log("Socket disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server is running on port", 3000);
})