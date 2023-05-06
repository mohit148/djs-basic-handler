const { SlashCommandBuilder } = require('discord.js');

const emojis = require('../../emojis.json')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('say-hello')
		.setDescription('Replies with Hello!'),
	async execute(interaction) {
		await interaction.reply(`Hello! ${emojis.wave}`);
	},
};