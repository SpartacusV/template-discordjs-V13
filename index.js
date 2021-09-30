const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const { TOKEN, PREFIX } = require('./config.json')

client.on('messageCreate', message => {
	if(message.content.startsWith(`${PREFIX}ping`)){
    	message.reply(`Pong.`)
    }
})

client.on('ready', c => {
    console.log(`${c.user.username} connecté.`)
})

client.login(TOKEN);