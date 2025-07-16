// Register commands
import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

// Get env vars
const token = process.env.API_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const commands = [];

// Import commands
import pong from "./commands/utility/pong.js";
import rps from "./commands/utility/rps.js";
import trivia from "./commands/utility/trivia.js";
commands.push(pong.data.toJSON());
commands.push(rps.data.toJSON());
commands.push(trivia.data.toJSON());

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();