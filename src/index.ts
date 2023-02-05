/* eslint-disable @typescript-eslint/no-var-requires */
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import fs from 'fs';
import client from '@root/client';

fs.readdirSync(path.join(__dirname, 'modules')).forEach(e =>  require(path.join(__dirname, 'modules', e, 'index.ts')));
client.login(process.env.BOT_TOKEN ?? '');