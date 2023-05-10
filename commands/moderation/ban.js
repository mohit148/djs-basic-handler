const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const Database = require("@replit/database");

const db = new Database();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them.')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to ban')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('The reason for banning'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),
	async execute(interaction) {
		const banLogChannelId = await db.get(`banLogChannel_${interaction.guild.id}`);
		
		// If banLogChannelId is null or undefined, remind the admin to set the ban log channel
		if (!banLogChannelId) {
			await interaction.reply('The ban log channel has not been set. Please use the `/setbanlog` command to set the ban log channel.');
			return;
		}
		
		const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
		const banLogChannel = interaction.guild.channels.cache.get(banLogChannelId);

		await interaction.guild.members.ban(target, { reason });
		await interaction.reply(`Banning ${target.username} for reason: ${reason}`);

		// Log the ban in the ban log channel
		banLogChannel.send(`Banned ${target.username} (${target.id}) for reason: ${reason}`);
	},
};
