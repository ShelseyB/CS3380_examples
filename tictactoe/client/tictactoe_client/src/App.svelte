<script>
  const ws = new WebSocket("ws://localhost:8080");
  let status = $state("");
  let playerID = $state("");
  let gameBoard = $state(Array(9).fill(null));
  let currentPlayer = $state("X");

  ws.onopen = () => {
    console.log("Connected to server!");
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
      gameBoard = data.board
      currentPlayer = data.currentPlayer;
    } else if (data.type === "gameOver") {
      if (data.winner === playerID) {
        status = "Congratulations, you won!"
      } else {
        status = "Sorry, better luck next time!";
      }
    }
  }

  function playerMove(index) {
    if (currentPlayer !== playerID) {
      status = "Sorry, it's not your turn yet";
      return;
    } else if (gameBoard[index] !== null) {
      status = "Sorry, that spot is taken";
      return;
    }
    console.log("evt", index);

    ws.send(JSON.stringify({
      type: "move",
      index,
      player: playerID
    }));
  }
</script>

<main>
  <p>{status}</p>
  <p>{playerID}</p>
  {#each gameBoard as square, idx}
    <button class="game-square" onclick={() => playerMove(idx)}>{square}</button>
  {/each}
</main>

<style>
  button.game-square {
    width: 100px;
    height: 100px;
    border: 1px black solid;
  }
</style>
