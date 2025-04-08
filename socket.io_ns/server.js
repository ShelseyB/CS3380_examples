import express from "express";
import http from "http";
import { Server } from "socket.io";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// Get the current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Default namespace
io.on('connection', (socket) => {
    console.log('User connected to default namespace');
    socket.emit('message', 'Welcome to the default namespace');
});

// Custom namespace: /chat
const chatNamespace = io.of('/chat');
chatNamespace.on('connection', (socket) => {
    console.log('User connected to chat namespace');
    socket.emit('message', 'Welcome to the chat room!');

    // Listen for messages in this namespace
    socket.on("message", (msg) => {
        console.log("Chat namespace received:", msg);
    });
});

// Custom namespace: /notifications
const notificationsNamespace = io.of('/notifications');
notificationsNamespace.on('connection', (socket) => {
    console.log('User connected to notifications namespace');
    socket.emit('message', 'You have new notifications!');

    // Don't really need to listen for anything from the client, notifications would most likely just send, not receive
});

server.listen(3000, () => {
    console.log("Server is running on port", 3000);
})