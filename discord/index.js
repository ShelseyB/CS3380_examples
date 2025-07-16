import dotenv from "dotenv";
dotenv.config();

import { games, getBoardButtons } from "./commands/utility/trivia_logic.js";

// Get env vars
const token = process.env.API_TOKEN;

// Import the commands
import pong from "./commands/utility/pong.js";
import rps from "./commands/utility/rps.js";
import trivia from "./commands/utility/trivia.js";

import { Client, Events, GatewayIntentBits, Collection, MessageFlags } from 'discord.js';

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Add the commands
client.commands = new Collection();
client.commands.set(pong.data.name, pong);
client.commands.set(rps.data.name, rps);
client.commands.set(trivia.data.name, trivia);

// Receive command interactions
client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isButton() && interaction.message?.interaction?.commandName === "uvu_trivia") {
        const game = games.get(interaction.message.id);

        if (!game) {
            return interaction.reply({ content: "Sorry, an error has occured" });
        }

        const { board, playerId, q } = game;

        const userId = interaction.user.id;
        if (userId !== playerId) {
            return interaction.reply({
                content: "This is not your game. If you wish to play trivia with the bot, please use the /uvu_trivia command",
                ephemeral: true
            });
        }

        const user_answer = interaction.customId;

        let content;
        if (q.a[0] === user_answer) {
            content = "Correct!"
        } else {
            content = `Sorry, the correct answer was ${q.a[0]}`;
        }
        await interaction.update({
            content,
            // Disable the board
            components: getBoardButtons(board)
                .map(row =>
                    row.setComponents(row.components.map(btn => btn.setDisabled(true)))
                )
        })
    }
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction);

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (err) {
        console.error(err);
        if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		}
    }
})


// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);