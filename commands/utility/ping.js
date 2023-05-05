const { SlashCommandBuilder } = require('discord.js');

//there is an error in below line fix it
const emojis = require('../../em.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('say-hello')
		.setDescription('Replies with Hello!'),
	async execute(interaction) {
		await interaction.reply(`Hello! ${emojis.bluedot}`);
	},
};