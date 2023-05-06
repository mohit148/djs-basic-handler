const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rank')
    .setDescription('shows users rank card!'),
  async execute(interaction) {
    let name = interaction.user.tag;
    if (name.length > 10) {
      name = name.substring(0, 10) + "...";
    }
    const embed = new EmbedBuilder()
      .setColor(2829617)
      .addFields(
        { name: name, value: '\`Level 32\` :star: **|** \`XP 289/750\` :sparkles:' }
      )
      .setThumbnail(interaction.user.avatarURL());

    await interaction.reply({ embeds: [embed] });
  },
};
