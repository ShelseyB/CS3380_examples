import WebSocket, {WebSocketServer} from "ws";

const wss = new WebSocketServer({ port: 3000 });

// Websocket connection has been created
wss.on("connection", (ws) => {
    console.log("A connection has been initialized");
    ws.send("Hello client!");

    ws.on("message", (message) => {
        console.log("Received a message from the client: %s", message);

        if (true) {
            ws.close();
        }
    });


});