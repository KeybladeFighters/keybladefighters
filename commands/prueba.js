const Discord = require("discord.js");

module.export.run = async (bot, message, args) => {

}

module.exports.help = {
  name: "prueba"
}


client.on('message', msg => {
  if (msg.content === 'gaga') {
    if(msg.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) )
      return msg.reply('pong!!  <:lux:421728762716225540>');
  }
});
