/* const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rank')
    .setDescription('shows users rank card!'),
  async execute(interaction) {
    let name = interaction.user.tag;
    if (name.length > 10) {
      name = name.substring(0, 11) + "...";
    }
    const embed = new EmbedBuilder()
      .setColor(2829617)
      .addFields(
        { name: name, value: '\`Level 32\` :star: **|** \`Rank #14\`\n[=============                 ]:triangular_flag_on_post:' }
      )
      .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}));

    await interaction.reply({ embeds: [embed] });
    await wait(2000);
    await interaction.followUp({content: ':bulb: **Did you know?** \n You can check the reward list for level roles using </rewards:28040282029>', ephemeral: true});
  },
};
*/
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

// Define a counter variable
let commandCounter = 0;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rank')
    .setDescription('shows users rank card!'),
  async execute(interaction) {
    let name = interaction.user.tag;
    if (name.length > 10) {
      name = name.substring(0, 11) + "...";
    }
    const embed = new EmbedBuilder()
      .setColor(2829617)
      .addFields(
        { name: name, value: '\`Level 32\` :star: **|** \`Rank #14\`\n[=============                 ]:triangular_flag_on_post:' }
      )
      .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}));

    await interaction.reply({ embeds: [embed] });
    
    // Increment the command counter
    commandCounter++;
    
    // If the counter is a multiple of 8, send the "did you know" message
    if (commandCounter % 3 === 0) {
      await wait(2000)
      await interaction.followUp({content: ':bulb: **Did you know?** \n You can check the reward list for level roles using </rewards:28040282029>', ephemeral: true});
    }
  },
};

