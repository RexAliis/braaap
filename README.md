# Braap

# Comandos

Inicia el programa
```sh-session
npm run start
```

Inicia el programa y lo reinicia en cada cambio del código (Para desarrollo)
```sh-session
npm run dev
```

Despliega los slash commands a Discord
```sh-session
npm run depl
```

# Variables de entorno

`BOT_TOKEN`*: Token del bot.
`BOT_INTENTS`*: Bit que indica que intents se le otorgaron al bot, puede calcularse [aquí.](https://discord-intents-calculator.vercel.app/).
`APP_ID`*: ID de la aplicación/bot.
`GUILD_ID`: Servidor de Discord principal del bot, por ahora solo se utiliza en el deploy de comandos, recomendado llenar.

`*` = Obligatorio para que funcione correctamente.