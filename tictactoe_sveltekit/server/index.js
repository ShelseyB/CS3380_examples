import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let gameState = {
    board: Array(9).fill(null),
    currentPlayer: "X",
    players: []
};

wss.on("connection", (ws) => {
    console.log("on connection", gameState.players.length);
    if (gameState.players.length < 2) {
        gameState.players.push(ws);
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
        } else {
            gameState.players[0].send(JSON.stringify({
                type: "waiting",
                message: "We're waiting on a player 2"
            }))
        }
    } else {
        ws.send(JSON.stringify({
            type: "error",
            message: "Sorry, this game is full"
        }));
    }

    ws.on("message", (message) => {
        const data = JSON.parse(message);

        if (data.type === "move") {
            const { index, player } = data;
            console.log("idx", index);

            if (player !== gameState.currentPlayer) {
                ws.send(JSON.stringify({
                    type: "error",
                    message: "Sorry, it's not your turn yet"
                }));
            } else if (gameState.board[index] !== null) {
                ws.send(JSON.stringify({
                    type: "error",
                    message: "Sorry, that spot is already taken"
                }));
            } else {
                // Update the game state
                gameState.board[index] = player;

                // Check for a winning move
                const winner = checkWinner();

                if (winner) {
                    broadcast({
                            type: "gameover",
                            winner,
                            board: gameState.board
                        }
                    )
                } else {
                    gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
                    broadcast({
                        type: "move",
                        board: gameState.board,
                        currentPlayer: gameState.currentPlayer
                    });
                }
            }
        }
    });

    ws.on("close", () => {
        console.log("connection has been closed", ws);
    });
});

// Let all players receive the same message
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
        if (gameState.board[a] && gameState.board[a] === gameState.board[b] && gameState.board[b] === gameState.board[c]) {
            return gameState.board[a];
        }
    }
    return null;
}