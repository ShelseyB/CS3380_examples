<script>

    let ws = null;

    $effect(() => {
        ws = new WebSocket("ws://localhost:8080");

        ws.onopen = () => {
            console.log("Connected to the server!");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("onmessage", data);

            if (data.type === "waiting") {
                status = data.message;
            } else if (data.type === "start") {
                playerID = data.player;
                status = data.message;
                currentPlayer = data.currentPlayer;
            } else if (data.type === "move") {
                gameBoard = data.board;
                currentPlayer = data.currentPlayer;
            } else if (data.type === "gameover") {
                console.log("board", data.board)
                status = data.winner === playerID ? "Congratulations, you won!" : "Sorry, better luck next time!";
                gameBoard = data.board;
            }
        }

        return () => {
            ws.close();
        }
    })
    

    function playerMove(idx) {
        if (currentPlayer !== playerID) {
            status = "Sorry, it's not your turn";
            return;
        } else if (gameBoard[idx] !== null) {
            status = "Sorry, that spot is taken";
            return;
        }

        ws.send(JSON.stringify({
            type: "move",
            index: idx,
            player: playerID
        }));
    }

    // Game state variables
    let status = $state("");
    let playerID = $state("");
    let gameBoard = $state(Array(9).fill(null));
    let currentPlayer = $state("X");
</script>

<main>
    <p>{status}</p>
    <p>{playerID}</p>
    <div class="grid">
        {#each gameBoard as square, idx}
            <button 
                class="game-square" 
                onclick={() => playerMove(idx)}
                disabled={currentPlayer !== playerID || square !== null}
            >{square}</button>
        {/each}
    </div>
</main>

<style>
  button.game-square {
    width: 100px;
    height: 100px;
    border: 1px black solid;
  }
  button.game-square:disabled {
    background-color: red;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
</style>