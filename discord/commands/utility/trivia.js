import { SlashCommandBuilder } from "discord.js";
import { getRandomQuestion, getBoardButtons, games } from "./trivia_logic.js";

const cmd = {
    data: new SlashCommandBuilder()
        .setName("uvu_trivia")
        .setDescription("Challenge the bot to a game of UVU trivia!"),
    async execute(interaction) {
        // Get a random question and create board
        const { q, board } = getRandomQuestion();
        console.log("after get random question")

        // Get discord button board
        const btnBoard = getBoardButtons(board);
        console.log("btnBoard", btnBoard);

        // Send a message
        const message = await interaction.reply({
            content: q.q,
            components: btnBoard,
            fetchReply: true
        });

        const playerId = interaction.user.id;

        games.set(message.id, {
            board,
            message,
            playerId,
            q
        });
    }
}

export default cmd;