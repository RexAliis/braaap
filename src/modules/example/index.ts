import client from '@root/client';

client.on('messageCreate', (message) => {
	if(!message.author.bot && message.content.includes('elpepe')) message.reply('etesech');
});