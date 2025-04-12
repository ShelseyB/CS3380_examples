## Tic Tac Toe

### Installation
```bash
cd client/tictactoe_client
npm install

cd ../../server
npm install
```

### Running
To start the server:
```bash
node index.js
```

To start the Svelte client:
```bash
npm run dev
```

### To create a Svelte and WebSocket project from scratch
Create a folder with the subfolder `server`.

Run the following in `server`:
```bash
npm init -y
npm install ws
```

In your base project folder, run the following:
```bash
npm create vite@latest
```
Follow the prompts to create the Svelte project.
1. You can name it whatever you want, but easiest might be to name it "client"
2. Select `Svelte` as the framework
3. Select your variant (JavaScript is fine)
4. Follow the instructions given to finish installing the client