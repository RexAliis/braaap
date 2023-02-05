import { SlashCommandBuilder } from 'discord.js';

export default new SlashCommandBuilder()
	.setName('test')
	.setDescription('Ignore')
	.setDMPermission(false)
	.setDefaultMemberPermissions('0')
;