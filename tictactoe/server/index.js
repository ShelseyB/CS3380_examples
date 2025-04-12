const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

let gameState = {
    board: Array(9).fill(null),
    currentPlayer: "X",
    players: []
};

wss.on("connection", (ws) => {
    if (gameState.players.length < 2) {
        gameState.players.push(ws);
        ws.send(JSON.stringify({
            type: "waiting",
            message: "Waiting for another player..."
        }));

        if (gameState.players.length === 2) {
            gameState.players[0].send(JSON.stringify({
                type: "start",
                message: "Game start!",
                player: "X",
                currentPlayer: "X"
            }));
            gameState.players[1].send(JSON.stringify({
                type: "start",
                message: "Game start!",
                player: "O",
                currentPlayer: "X"
            }));
        }
    } else {
        ws.send(JSON.stringify({
            type: "error",
            message: "Sorry, this game is full!"
        }));
        ws.close();
    }

    ws.on("message", (message) => {
        const data = JSON.parse(message);

        if (data.type === "move") {
            const { index, player } = data;

            if (player !== gameState.currentPlayer) {
                // Handle error
            } else {
                gameState.board[index] = player;
                const winner = checkWinner();
                console.log("winner", winner);
                if (winner) {
                    broadcast({ type: "gameOver", winner });
                } else {
                    gameState.currentPlayer = gameState.currentPlayer == "X" ? "O" : "X";
                    broadcast({type: "move", board: gameState.board, currentPlayer: gameState.currentPlayer });
                }
            }
        }
    })
});

function broadcast(message) {
    gameState.players.forEach(player => player.send(JSON.stringify(message)));
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        console.log(a, b, c, gameState.board[a], gameState.board[b], gameState.board[c], gameState.board[a] === gameState.board[b] === gameState.board[c]);
        if (gameState.board[a] && gameState.board[a] === gameState.board[b] && gameState.board[b] === gameState.board[c]) {
            return gameState.board[a];
        }
    }
    return null;
}