const Discord = require('discord.js');


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
var client = new Discord.Client();
client.on("ready", () => {
  client.user.setStatus(status)
 client.user.setGame(game)

 console.log(`Logged in as ${client.user.tag}!`);

});




client.on("message", async message => {

    if(message.content.startsWith(`!pls`)) {
        try {
            await message.react('🇲');
            await message.react('🇪');
           
		
        }
        catch (error) {
            console.error('One of the emojis failed to react.');
        }
    }
});
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};


client.on('message', async message => {
    if (message.content === '!meh') {
        try {
            await message.react('🇲');
            await message.react('🇪');
            await message.react('🇭');
		 await message.react('427222452246937601');
		
        }
        catch (error) {
            console.error('One of the emojis failed to react.');
        }
    }
});

client.on('raw', async ({ t: eventName, d: data }) => {
	if (!events.hasOwnProperty(eventName)) return;

	const channel = client.channels.get(data.channel_id);

	if (channel.messages.has(data.message_id)) return;

	const user = client.users.get(data.user_id);
	const message = await channel.messages.fetch(data.message_id);
	const reaction = message.reactions.get(data.emoji.id || data.emoji.name);

	client.emit(events[eventName], reaction, user);
});

client.on('messageReactionAdd', (reaction, user) => {
	console.log('Reaction added; current count:', reaction.count);
});

client.on('messageReactionRemove', (reaction, user) => {
	console.log('Reaction removed; current count:', reaction.count);
});

client.on('message', message => {
	if (message.content === '!react') {
		console.log('First reaction incoming.');
		message.react('431317649780113418');
	}
});


 client.on("guildMemberAdd", member => {
	console.log("user" + member.username + "se unio al server")
	 var role = member.guild.roles.find("name", "nuevo");
	 member.addRole(role)
});


client.on("message", message => {

    if(message.content.startsWith(`añadir`)) {
        message.mentions.members.first().addRole('275331552198656000'); // gets the <GuildMember> from a mention and then adds the role to that member                     
    }

    if(message.content == `lista`) {
        const ListEmbed = new Discord.RichEmbed()
            .setTitle('Users with the go4 role:')
            .setDescription(message.guild.roles.get('275331552198656000').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);       
 
    }
	    if(message.content.startsWith(`!vulpes`)) {
	       const guildMember = message.member;

        guildMember.addRole('275331552198656000'); // gets the <GuildMember> from a mention and then adds the role to that member 
        guildMember.removeRole('451624985287720962');
	guildMember.removeRole('451652968752611328');
		    
    }
});
 client.on("MessageReactionAdd", function(users) {
if (message.content === "prueba") {
  users.addRole(users.guild.roles.find("name", vulpes))
} 
});

client.on("message", message => {

    if(message.content.startsWith(`añadir`)) {
        message.mentions.members.first().addRole('275331552198656000'); // gets the <GuildMember> from a mention and then adds the role to that member                     
    }

    if(message.content == `lista`) {
        const ListEmbed = new Discord.RichEmbed()
            .setTitle('Users with the go4 role:')
            .setDescription(message.guild.roles.get('275331552198656000').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);                    
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
            .setAuthor(`Desconocido`)
            .addField(`__Un usuario desconocido dice:__`, `${msg}\n ======================== \n *Tu no puedes responderle al **Desconocido** por este chat.* `)
            .setColor(embedOrange);
            person.send({
                embed : customEmbed
            });
            message.channel.send(`MP enviado ${message.author}`);
            break;

      
	
        
		    
         case "comandos":
    const embed = new Discord.RichEmbed()
  .setTitle("Lista de comandos:")
  .setAuthor("KeyBladeFighters", "https://i.imgur.com/dnyKx2z.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("Con el tiempo se modificaran o añadiran más comandos.")
  .setFooter("Cualquier sugerencia o ayuda es aceptada.", "https://i.imgur.com/dnyKx2z.jpg")
  .setImage("https://cdn.discordapp.com/attachments/425413613898039317/448098501184716801/Ganador_Lux.png")
  .setThumbnail("https://i.imgur.com/dnyKx2z.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://steamcommunity.com/id/Shoowderify/")
  .addField("!camii",
    "Descripcion: Publica el canal de YT de camii")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("!roll", "Descripcion: Publica un numero aleatorio del 1 al 6.", true)
  /*
   * Blank field, useful to create some space.
   */
 .addField("!slap @[usuario]", "Descripcion: Abofetea a un usuario.", true)
    
  .addField("!8ball [pregunta]", "Descripcion: Responde la pregunta que le hagas.", true);
	
  

		    
  message.channel.send({embed});	
		    
            }
});





client.on("message", (message) => {
  
  // Exit and stop if the prefix is not there or if user is a bot

  if (!message.content.startsWith(prefix) || message.author.bot  ) return;

  if (message.content.startsWith(prefix + "ping!") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
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
	
     if(message.content.startsWith(`!añadir`)) {
        message.mentions.members.first().addRole('434695066167279616'); // gets the <GuildMember> from a mention and then adds the role to that member                     
    }else

    if(message.content == `!upright`) {
        const ListEmbed = new Discord.RichEmbed()
            .setTitle('Usuarios upright:')
	     .setColor(embedYellow)
            .setDescription(message.guild.roles.get('434695066167279616').members.map(m=>m.user.tag).join('\n'));
	    
        message.channel.send(ListEmbed);  
	    
      message.delete(0000); //borra el mensaje en 0000 milisegundos (1000 = 1 seg)
    }else
	
   if(message.content == `!reverse`) {
        const ListEmbed = new Discord.RichEmbed()
            .setTitle('Usuarios reverse:')
	    .setColor(embedPurple)
            .setDescription(message.guild.roles.get('434695269897207819').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);      

      message.delete(0000); //borra el mensaje en 0000 milisegundos (1000 = 1 seg)

   
    }	else
		
   if(message.content == `!atributo`) {
        const ListEmbed = new Discord.RichEmbed()
            .setTitle('Usuarios con rol:')
	    .setColor(embedBlue)
            .setDescription(message.guild.roles.get('423814744307269632').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);      

      message.delete(0000); //borra el mensaje en 0000 milisegundos (1000 = 1 seg)

   
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






client.login("NDQ0NTk0NDMxOTk2NDYxMDU4.DdeUNA.yqvkC_T7DUkMJyvY2c7Sf6OjM9U");
