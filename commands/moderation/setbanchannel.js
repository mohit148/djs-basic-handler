const { SlashCommandBuilder } = require('@discordjs/builders');
const Database = require("@replit/database");

const db = new Database();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setbanlog')
    .setDescription('Set the ban log channel')
    .addChannelOption(option => 
        option.setName('channel')
            .setDescription('The channel to log bans in')
            .setRequired(true)),
  async execute(interaction) {
    const banLogChannel = interaction.options.getChannel('channel');

    // Do some validation to check if the user has permissions to set the ban log channel, etc.

    // Save the ban log channel to your Replit database
    await db.set(`banLogChannel_${interaction.guild.id}`, banLogChannel.id); {
      console.log(`Server: ${interaction.guild.name} Guild Id: ${interaction.guild.id} BanLogChannelId: ${banLogChannel.id}`)
    }

    await interaction.reply(`The ban log channel has been set to ${banLogChannel}.`);
  },
};
