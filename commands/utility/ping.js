const { SlashCommandBuilder } = require('discord.js');
const emotes = require('../../../emojis.json');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply(`Pong! ${emotes.wave}`);
	},
};