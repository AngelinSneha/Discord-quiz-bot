const { User } = require("../Users/User");
const {
  config: { GENERAL_BOT_ID },
} = require("../config");
const { createPrivateChannel } = require("../channels/createPrivateChannel");

async function createCommand(interaction) {
  const user = await User(interaction.user.id);
  if (user) {
    if (user) {
      interaction.reply(`You quiz channel is already created`);
      return;
    }
  } else {
    if (interaction.channel.id === GENERAL_BOT_ID) {
      const channelName = `quiz-${interaction.user.username}`;
      await createPrivateChannel(interaction, channelName);
    }
  }
}

module.exports.createCommand = createCommand;
