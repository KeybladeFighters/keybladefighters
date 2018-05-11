const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pongoooo!');
  }
});

client.on('message', msg => {
  if (msg.content === 'NA: Double lux active!') {
     msg.channel.send('@everyone :fire: :lux: Lux Time!!! A darle con todo mis Keyblade Rangers~ :lux: :fire:', {files: ["https://cdn.discordapp.com/attachments/421507243318706188/442339823274033184/BONO_DE_LUX.png"]});
  }
});



client.login('NDQ0NTk0NDMxOTk2NDYxMDU4.DdeUNA.yqvkC_T7DUkMJyvY2c7Sf6OjM9U');
