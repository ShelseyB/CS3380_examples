import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

// Websocket connection has been created
wss.on("connection", (ws) => {
    console.log("A connection has been initialized");
    ws.send("Hello client!");

    ws.on("message", (message) => {
        console.log("Received a message from the client: %s", message);
h
        if (true) {
            ws.close();
        }
    });

    ws.on("close", () => {
        console.log("connection has been closed");
    });

    ws.on("error", (err) => {
        console.log("An error has occured", err);
    });
});