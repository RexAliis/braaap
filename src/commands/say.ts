import { SlashCommandBuilder } from 'discord.js';

export default new SlashCommandBuilder()
	.setName('say')
	.setDescription('decir algo')
	.setDMPermission(false)
	.addStringOption(opt => opt
		.setName('text')
		.setDescription('el texto pelotudo te lo tengo que explicar???')
		.setRequired(true)
	)
;