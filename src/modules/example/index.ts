import client from '@root/client';

client.on('messageCreate', (message) => {
	if(!message.author.bot && message.content.includes('elpepe')) message.reply('etesech');
});
client.on('messageCreate', (message) => {
	if(!message.author.bot && message.content.includes('maurice')) {
		message.react('<:maurice:1050652578310008952>');
	}
});
client.on('messageCreate', (message) => {
	if(!message.author.bot && message.content.includes('PANOPTICON')) message.reply('http://momazos-sijueputa.discowd.com/r/panopticon-in-ultrakill-1.png _ _');
});
client.on('messageCreate', (message) => {
	if (!message.content.startsWith('di')) return;
  
	const messageToRepeat = message.content.split('di')[1].trim();
	message.channel.send(messageToRepeat);
});
client.on('messageCreate', (message) => {
	if(!message.author.bot && message.content.includes('di @everyone')) message.reply('https://cdn.discordapp.com/attachments/852676149124792330/1072293491939487924/cooltext429078177054731.gif');
});
client.on('message', (message) => {
	if (!message.mentions.has(bot.user)) return;
  
	message.reply('COÑO QUE LADILLA QUE SOS, DEJA D EOEDIR QUE JUEGUES CON NOSE QUIEN TAL JUEGO DE MIERDA, PQ ESO ES LO QUE SON, PUROS JUEGOS DE MIERDA, VETE AL CARAJO Y LA RE CONTRA DE PUTÍSIMA MADRE QJE TIENES, FLACO DEJA DE SER TAN OBESO Y SAL A LA CALLE ME TIENES HASTA LOS HUEVOS MARICON DE MIERDA OAJALA TE CAIGA UN RAYO Y SIHAS VIVO, OARA QUE LUEGO YE CAIGAN 7 RAYOS MAS Y TE ATROPELLE UN CAMION QUE PESE MAS QUE LA MAMA DE JOSENEO, gracias');
});