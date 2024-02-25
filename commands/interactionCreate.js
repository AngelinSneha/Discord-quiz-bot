const { createCommand } = require("./createCommand");

async function interactionCreate(interaction) {
  const cmd = interaction.commandName;

  if (cmd === "create") {
    return createCommand(interaction);
  }
}

module.exports.interactionCreate = interactionCreate;
