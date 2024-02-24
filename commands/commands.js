const {
  config: { CLIENT_ID, BOT_TOKEN, GENERAL_BOT_ID },
} = require("../config");
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Create your Quiz Server",
  },
  {
    name: "start",
    description: "Give a Quiz",
  },
  {
    name: "leaderboard",
    description: "See your LeaderBoard",
  },
];

const rest = new REST({ version: "10" }).setToken(BOT_TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GENERAL_BOT_ID), {
      body: commands,
    });

    console.log("Slash commands were registered successfully!");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
