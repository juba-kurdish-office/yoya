module.exports = {
	name: 'close',
	category: 'Ticket',
	description: 'Delete a specified ticket.',
	aliases: [],
	usage: 'delete',
	userperms: ['ADMINISTRATOR'],
	botperms: [],
	run: async (client, message, args) => {
		message.delete();
		if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
		else {
			return message.reply('you cannot use this command here. Please use this command when you want to delete a ticket.');
		}
	},
};