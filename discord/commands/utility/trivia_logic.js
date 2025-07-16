import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

const questions = [
    {
        q: "Who was the first female president of UVU?",
        a: ["Dr. Astrid S. Tuminez", "Dr. Jane Martial", "Dr. Martha G. Jimenez", "Dr. Hilary S. Parsnip"]
    },
    {
        q: "What percent of UVU students were first generation college students in 2018?",
        a: ["38%", "22%", "95%", "78%"]
    },
    {
        q: "What year was UVU established?",
        a: ["1941", "1988", "1914", "1976"]
    }
];

const getRandomQuestion = () => {
    // Choose a random question
    const q = questions[Math.floor(Math.random() * questions.length)];

    // Shuffle the answers
    const as = [...(q.a)].sort(() => Math.random() - .5);

    // Create the board
    const board = [[as[0], as[1]], [as[2], as[3]]];
    return {
        q,
        board
    }
};

const getBoardButtons = (board) => {
    /**
        new ActionRowBuilder()
            .addComponents(
                row.map((cell) => {
                    new ButtonBuilder()
                        .setCustomId(cell)
                        .setLabel(cell)
                        .setStyle(ButtonStyle.Secondary)
                })
            ) */
    return board.map((row) => 
        new ActionRowBuilder()
            .addComponents(
                row.map((cell) =>
                    new ButtonBuilder()
                        .setCustomId(cell)
                        .setLabel(cell ?? ' ')
                        .setStyle(ButtonStyle.Secondary)
                )
        )
    )
}

const games = new Map();

export {
    questions,
    getRandomQuestion,
    getBoardButtons,
    games
}
