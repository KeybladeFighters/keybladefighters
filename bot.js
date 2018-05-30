const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!";
const game = "KHUX! "
const status = "Online"
  const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777

var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

var fortunes = [
    "Si.",
    "Es cierto.",
    "Definitivamente si.",
    "Sin duda.",
    "En teoria si.",
    "Puedes confiar en ello.",
    "Como yo lo veo, si.",
    "Lo mas probable.",
    "Se ve bien.",
    "Las señales dicen que si.",
    "Respuesta confusa,intenta otra vez.",
    "Preguntalo denuevo despues.",
    "Mejor no te lo digo ahora...",
    "No puedo predecirlo ahora.",
    "Concentrate y pregunta despues.",
    "No cuentes con ello.",
    "Mi respuesta es no.",
    "Mis fuentes dicen que no.",
    "Eso no se ve bien...",
    "Muy dudoso.",
];


client.on("ready", () => {
    client.user.setStatus(status)
    client.user.setGame(game)
 console.log(`Logged in as ${client.user.tag}!`);

});

client.on ("message", message => {
 if(msg.content === 'kill')
{
	let myRole = message.guild.roles.find("name", "Moderador");
	if(!message.member.roles.has(myRole.id))
	{
		return message.reply("you pleb, you don't have the permission to use this command.")
	}
	if(message.mentions.users.size === 0) 
	{
	return message.reply("please mention a user to kill");
	}
	let killMember = message.guild.member(message.mentions.users.first());
	if (!killMember)
	{
		return message.reply("user doesn't exist or not valid");
	}
	let roleMembro = message.guild.roles.find("name", "membro");
	let roleSilenced = message.guild.roles.find("name", "silenced");
	if(killMember.roles.has(roleMembro.id))
	{
		killMember.removeRole(roleMembro).then(() => 
		{	
			setTimeout(function()
			{
				if(!killMember.roles.has(roleSilenced.id))
				{
					killMember.addRole(roleSilenced);
				}
					message.reply(`${killMember.user.username} was succesfully silenced`).catch(console.error);
				}, 5000);
			}).catch(console.error);		
	}
}
});


client.on("message", function(message) {
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {

        case "8ball":
        
            if (args[1]) {
                //message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
                message.channel.send({embed: {
                    color: embedRed,
                    title: "Hmmm...",
                    description: (fortunes[Math.floor(Math.random() * fortunes.length)]),
                    }});
            }
           
            else {
                message.channel.send({embed: {
                    color: embedRed,
                    title: "Oops...",
                    description: "El comando es: **!8ball [Question]**",
                    }});
            }
            break;
        
          case "roll":
        message.channel.send({embed: {
                    color: embedRed,
                    title: "Tu tiraste...",
                    description: Math.floor(Math.random() * 6) + 1,
                    }});
                    break;
        
        case "slap":
            let slappedUser = message.mentions.users.first();

            if(message.mentions.users.size < 1) return message.reply("Te olvidaste del nombre a quien pegarle.");
            message.reply("Acabas de abofetear a " + slappedUser);
            break;

        case "camii":
            message.channel.sendMessage("Ve a https://www.youtube.com/channel/UCfC5uaY01NBD-vIq5tXfaag/videos?disable_polymer=1");
            break;

        case "dm":
            let person = message.mentions.users.first();
            let msg = message.content.split(" ").slice(2).join(" ");

            if(message.mentions.users.size < 1) return message.reply("Uso: !dm @PLAYER000 Me gustan los ponys");
            if(!msg) return message.reply("Usage: /dm @PLAYER000 I Like Ponies");

            const customEmbed = new Discord.RichEmbed()
            .setAuthor(`Desconocido`, message.author.displayAvatarURL)
            .addField(`__Un usuario desconocido dice:__`, `${msg}\n ======================== \n *Tu no puedes responderle al **Desconocido** por este chat.* `)
            .setColor(embedOrange);
            person.send({
                embed : customEmbed
            });
            message.channel.send(`MP enviado a ${message.author}`);
            break;
        
        
            }
});







client.on("message", (message) => {
  
  // Exit and stop if the prefix is not there or if user is a bot

  if (!message.content.startsWith(prefix) || message.author.bot  ) return;

  if (message.content.startsWith(prefix + "ping") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "galleta") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
    message.channel.send("galletita!", {files: ["https://i.imgur.com/PK23Px5.png"]});
  } else
    
  if (message.content.startsWith(prefix + "supergalleta") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
    message.channel.send('Supergalleta! ', {files: ["https://i.imgur.com/3zrv0PB.png"]});
  } else
    
  if (message.content.startsWith(prefix + "mira") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
    message.channel.send('', {files: ["https://i.imgur.com/LfKhMSm.png"]});
  } else
    
      if (message.content.startsWith(prefix + "doit") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
    message.channel.send('', {files: ["https://i.imgur.com/f8PwoDM.png"]});
  } else
   
    if (message.content.startsWith(prefix + "aviso") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
    message.channel.send('@everyone :fire: <:lux:421728762716225540> Lux Time!!! A darle con todo mis Keyblade Rangers~ <:lux:421728762716225540> :fire:', {files: ["https://cdn.discordapp.com/attachments/421507243318706188/442339823274033184/BONO_DE_LUX.png"]});
  } 

});

  



client.on('message', msg => {
  if (msg.content === 'ping!!') {
    if(msg.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) )
      return msg.reply('pong!!  <:lux:421728762716225540>');
  }
});



client.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "$lo0op") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send('@everyone :fire: <:lux:421728762716225540> Lux Time!!! A darle con todo mis Keyblade Rangers~ <:lux:421728762716225540> :fire:', {files: ["https://cdn.discordapp.com/attachments/421507243318706188/442339823274033184/BONO_DE_LUX.png"]})
        }, 1 * 21600000); 
    }
});







client.login('NDQ0NTk0NDMxOTk2NDYxMDU4.DdeUNA.yqvkC_T7DUkMJyvY2c7Sf6OjM9U');
