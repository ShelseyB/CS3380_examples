import { SlashCommandBuilder } from "discord.js";

const cmd = {
    data: new SlashCommandBuilder()
        .setName("rockpaperscissors")
        .setDescription("Challenge the bot to a game of rock paper scissors!")
        .addStringOption(option => 
            option.setName("choice")
                .setDescription("Your move")
                .setRequired(true)
                .addChoices(
                    { name: "Rock", value: "rock" },
                    { name: "Paper", value: "paper" },
                    { name: "Scissors", value: "scissors" }
                )
        ),
    async execute(interaction) {
        const userChoice = interaction.options.getString("choice");
        console.log("userChoice", userChoice);
        const choices = ["rock", "paper", "scissors"];
        const botChoice = choices[Math.floor(Math.random() * 3)];
        
        if (userChoice === botChoice) {
            await interaction.reply(`I chose ${botChoice}. It's a tie!`);
        } else if (
            (botChoice === "rock" && userChoice === "paper") ||
            (botChoice === "paper" && userChoice === "scissors") ||
            (botChoice === "scissors" && userChoice === "rock")
        ) {
            await interaction.reply(`I chose ${botChoice}. You win!`);
        } else {
            await interaction.reply(`I chose ${botChoice}. I win!`);
        }
    }
}

export default cmd;