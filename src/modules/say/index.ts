import client from '@root/client';

client.on('interactionCreate', interaction => {
	if(!interaction.isChatInputCommand() || interaction.commandName !== 'say') return;

	const text = interaction.options.getString('text') ?? '';

	if(text.includes('@everyone') || text.includes('@here') || /<@&(.*)>/.test(text)) {
		interaction.reply('https://cdn.discordapp.com/attachments/852676149124792330/1072293491939487924/cooltext429078177054731.gif');
		return;
	}

	interaction.channel?.send(text);
	interaction.reply({
		content: 'Hecho.',
		ephemeral: true
	});
});