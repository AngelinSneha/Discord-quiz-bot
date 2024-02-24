const {
  config: { GENERAL_BOT_ID },
} = require("../config");

async function messageCreate(message) {
  if (message.author.bot) return;

  if (message.channel.id === process.env.GENERAL_BOT_ID) {
    if (message.content.toLowerCase() === "hi") {
      message.reply({
        content: `Hello ${message.author.username}, Welcome to JS Quiz Bot`,
      });
    }
    return;
  }
}

module.exports.messageCreate = messageCreate;
