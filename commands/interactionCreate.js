async function interactionCreate(interaction) {
  const cmd = interaction.commandName;
  console.log(cmd);
}

module.exports.interactionCreate = interactionCreate;
