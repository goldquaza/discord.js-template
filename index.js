const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Bot is online as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!ping') {
    const sent = await message.channel.send('Pinging...');
    const ping = sent.createdTimestamp - message.createdTimestamp;
    sent.edit(`my ping is ${ping}ms.`);
  }
});


const config = require('./config.json');


client.login(config.token)
  .then(() => {
    console.log(`client logged in as ${client.user.username}`);
    client.user.setActivity(`${client.guilds.cache.size} guilds`);
  })
  .catch(console.error);
