const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  Client,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  CoolDown: true,
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite our Bot"),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    // E-Nepal bot description
    const description = `
      E-Nepal is a chatbot created solely for the Gaddafi Sangathan server, allowing users to engage in conversations within the community. It's designed to promote interaction and communication, enhancing the overall experience for Gaddafi Sangathan members.

      You can join our Discord server to use this bot: [Join Now](https://discord.gg/UzTuU34MHj)
    `;

    const link = `https://discord.gg/UzTuU34MHj`;

    const buttons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setURL(link)
        .setLabel("Discord")
        .setStyle(ButtonStyle.Link)
    );

    const invite = new EmbedBuilder()
      .setAuthor({ name: `${client.user.tag}` })
      .setDescription(description)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1028538200425246733/1063166826768506991/61vI32zUXaL.png"
      )
      .setColor("Random");

    interaction.reply({
      embeds: [invite],
      components: [buttons],
      ephemeral: false,
    });
  },
};
