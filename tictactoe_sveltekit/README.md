## Tic Tac Toe

### Installation
```bash
cd client
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
npx sv create client
```
Follow the prompts to create the Svelte project.
