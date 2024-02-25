const { ChannelType, PermissionFlagsBits } = require("discord.js");
const axios = require("axios");

async function createPrivateChannel(interaction, channelName) {
  const existingChannel = interaction.guild.channels.cache.find(
    (channel) => channel.name == channelName
  );
  if (existingChannel) {
    interaction.reply("Your Quiz Channel is Already Created.");
    return;
  }

  try {
    const createdChannel = await interaction.guild.channels.create({
      name: channelName,
      type: ChannelType.GuildText,
      permissionOverwrites: [
        {
          id: interaction.user.id, // Allow access to the user who created it
          allow: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages,
          ],
        },
        {
          id: interaction.guild.roles.everyone.id, // Deny access to everyone else
          deny: [PermissionFlagsBits.ViewChannel],
        },
      ],
    });

    await axios.post(`http://localhost:3000/users/`, {
      id: String(interaction.user.id),
      username: interaction.user.username,
      channelId: createdChannel.id,
      channelName: createdChannel.name,
    });
    console.log("Private channel create", createdChannel);
    interaction.reply(`Private channel created: ${createdChannel}`);
  } catch (e) {
    console.log("error creating channel", e);
    interaction.reply("Error while creating a private channel");
  }
}

module.exports.createPrivateChannel = createPrivateChannel;
