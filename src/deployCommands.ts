/* eslint-disable @typescript-eslint/no-var-requires */
import dotenv from 'dotenv';
dotenv.config();
import { REST, Routes } from 'discord.js';
import path from 'path';
import fs from 'fs';


const commands = fs.readdirSync(path.join(__dirname, 'commands'))
	.filter(name => name.endsWith('.ts'))
	.map(name => require(path.join(__dirname, 'commands', name)).default)
;
const rest = new REST().setToken(process.env.BOT_TOKEN ?? '');

(async () => {
	console.log(`Started refreshing ${commands.length} application (/) commands.`);

	const data = await rest.put(
		process.env.GUILD_ID ?
			Routes.applicationGuildCommands(process.env.APP_ID ?? '', process.env.GUILD_ID) :
			Routes.applicationCommands(process.env.APP_ID ?? ''),
		{ body: commands },
	) as { length: number };

	console.log(`Successfully reloaded ${data.length} application (/) commands.`);
})();