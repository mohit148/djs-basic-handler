const { Events, ActivityType} = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
client.user.setPresence({activities: [{ name: 'Townhall', type: ActivityType.Watching,}], status: 'idle' });
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
}; 