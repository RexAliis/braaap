import { Client } from 'discord.js';

const client = new Client({
	intents: parseInt(process.env.BOT_INTENTS ?? '0')
});

client.on('ready', () => {
	console.log('Discord client ready');
});

export default client;