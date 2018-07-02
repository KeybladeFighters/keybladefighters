const Discord = require('discord.js');
const yourID = "125557470616616960";
const setupCMD = "!atributo"
let initialMessage = `**Elije tu atributo**`;
const roles = ["Upright", "Reverse"];
const reactions = ["428233218895118357", "428233668235100170"];
const botToken = "NDQ0NTk0NDMxOTk2NDYxMDU4.DdeUNA.yqvkC_T7DUkMJyvY2c7Sf6OjM9U"; 
const rando_imgs = [
'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
'https://media.giphy.com/media/lXiRKBj0SAA0EWvbG/giphy.gif',
'https://media.giphy.com/media/16bJmyPvRbCDu/giphy.gif',
];
const rando_rega = [
'https://www.surfeatuvida.com/wp-content/uploads/2016/04/regañar.gif',
'https://media.giphy.com/media/kD2iSc3t9W5JC/giphy.gif',
'https://78.media.tumblr.com/tumblr_matnctrgBQ1rpa4tjo1_400.gif',
"https://media.giphy.com/media/11VW2xPAb4OFPO/giphy.gif",	
];
const rando_risa = [

"https://media.giphy.com/media/TJKm32CqAr0CA/giphy.gif",	
];
const rando_latigo = [

"https://media.giphy.com/media/xT5LMpgWlhdAVBCz3W/giphy.gif",	
	"https://media.giphy.com/media/3orif1FICBYgRwNWCc/giphy.gif",
];

let prefix = "!";
const game = "Khux! "
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
var pelea = [
	
    "acaba de abofetear a " ,
    "golpeó con su keyblade a <:KB:462421414000066590> " ,
    "ha usado impactrueno en contra de <:pikachu:462422223186296855> " ,
    "usó de limpia pisos a " ,
    "le ha dado una patada en el lóbulo occipital a " ,
    "usó granizo de Farron en contra de " ,
    "<:BibleThump:454069403437236226> le ha lanzado lagrimas a  " ,
    "pisoteó a " ,
    "lanzó un Kamehameha a <:Kame:462422418817024003> " ,
    "hizo un fatality a " ,
    "le lanzó un caparazón de tortuga a <:Caparazn_Rojo:462422923735465984> " ,
    "se enojó y usó ira primigenia en contra de <:Ira_primigenia:462423974454755348> " ,
    "se comió una flor <:flor:462421736755822592> y le lanzó bolas de fuego a <:mario:462421778224906260> " ,
    "usó FUS-RO-DAH! en contra de " ,
    "usó Látigo cepa en contra de <:latigo:462423146981490708> " ,
    " :fire: :sheep: :fire: ha quemado como a una oveja a " ,
    "usó su espada de diamante en contra de <:Espada_de_Diamante:462423261091856395> " ,
    "usó rugido de dinosaurio <:rawrr:438377900153241610> *(es super efectivo)* en contra de " ,
	
];
var client = new Discord.Client();
client.on("ready", () => {
  client.user.setStatus(status)
 client.user.setGame(game)

 console.log(`Logged in as ${client.user.tag}!`);

});
client.on("guildMemberAdd", function(member){
	member.guild.channels.find("name", "spam-town").sendMessage(member.toString() + " bienvenido, elige tu atributo en el siguiente mensaje");
	
	member.guild.channels.find("name", "spam-town").sendMessage("!atributo");
	
	member.addRole(member.guild.roles.find("name", "Keyblade Rangers"));
		
	member.addRole(member.guild.roles.find("name", "↯                                                 Atributo                                    ↯"));
		
	member.addRole(member.guild.roles.find("name", "⇙ In Development ⇘"));
		
	member.addRole(member.guild.roles.find("name", "↬                                                 Estado                                    ↫"));
	
});


//empieza el rol por reacciones
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(` **"${role}"** `); //DONT CHANGE THIS
    return messages;
}


client.on("message", message => {
    if (message.member.roles.some(r=>["administrador", "moderador", "KeyBlade Fighters"].includes(r.name)) && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == client.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});

//Termina el rol por reacciones-----------------------





    

		
		
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
client.on('message', async message => {
    if (message.content === '!meh!') {
        try {
            await message.react('🇨');
            await message.react('🇦');
            await message.react('🇳');
            await message.react('🇸');
            await message.react('🇦');
		await message.react('🇸');
		 await message.react('438378115601793034');
		
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
            message.reply((pelea[Math.floor(Math.random() * pelea.length)]) + slappedUser);
            break;
		      
    


      
        case "disco":
		   
      
	       message.channel.send('  ', {files: ["https://i.imgur.com/dTkdWwP.gif"]});
   
            break;
		     case "noticias":
		    message.delete(0000);
      
	       message.channel.send(' http://api.sp.kingdomhearts.com/information/list ');
   
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
  .addField("!disco",
    "Descripcion: Descrubrelo ")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("!roll", "Descripcion: Publica un numero aleatorio del 1 al 6.", true)
  /*
   * Blank field, useful to create some space.
   */
 .addField("!slap @[usuario]", "Descripcion: Abofetea a un usuario.", true)
     .addField("!meh", "Descripcion: meh", true)
.addField("!abrazo , !abrazo [@usuario]", "Descripcion:Puede ser usado en contra de alguien en especifico, o para todos (!abrazo)", true)
	     .addField("!oveja", "Descripcion: je", true)
    
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
  } else   
	        if (message.content.startsWith(prefix + "video") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
  		  message.delete(0000);
	       message.channel.send(' Camii_669 subió un video de youtube :  https://www.youtube.com/watch?v=1GIVC5RJ5dk');
  } else   
	     
	
     if(message.content.startsWith (prefix + "añadir") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
        message.mentions.members.first().addRole('458114676643987456'); // gets the <GuildMember> from a mention and then adds the role to that member                     
    } else	
	     if (message.content.startsWith(prefix + "apruebo") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
  		  message.delete(0000);
	       message.channel.send('Camii aprueba esto', {files: ["http://i0.kym-cdn.com/photos/images/original/000/969/999/dba.gif"]});
  } else   
	      if (message.content.startsWith(prefix + "enojo") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
  		  message.delete(0000);
	       message.channel.send(' <:omaewa:438377799041024010> ', {files: ["https://www.espreso.rs/data/images/2017/03/16/15/179809_post16097herculeshadesokayfinefiner5pu.gif"]});
  } else   
	     
    if(message.content.startsWith (prefix + "abrazo") ) {

        let member = message.mentions.members.first()
	message.delete(0000);
	    if(message.mentions.users.size < 1) return message.channel.send(`${message.author} le dio a @everyone un abrazo!`, {
    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]});
     message.channel.send(`${message.author} le dio a ${member} un abrazo!`, {
    file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
	     
	     
     });
  
    
} else 
	    if(message.content.startsWith (prefix + "latigo") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {

        let member = message.mentions.members.first()
	message.delete(0000);
		      if(message.mentions.users.size < 1) return message.channel.send("Latigazo para todos!", {files: ["https://media.giphy.com/media/3orieMQ7zX5X633T2g/giphy.gif"]});
     message.channel.send(` ${member} fue azotado por ${message.author}  !`, {
    file: rando_latigo[Math.floor(Math.random() * rando_latigo.length)]
	     
	     
     });
  
    
} else 

	 if(message.content.startsWith (prefix + "regaño") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {

        let member = message.mentions.members.first()
	message.delete(0000);
     message.channel.send(`${message.author} ha regañado a ${member} !`, {
    file: rando_rega[Math.floor(Math.random() * rando_rega.length)]
	     
	     
     });
    
} else 
	 if(message.content.startsWith (prefix + "risa") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
	message.delete(0000);
     message.channel.send(`MUAJAJAJAJA  <:jaja:425806439076986893> !`, {
    file: rando_risa[Math.floor(Math.random() * rando_risa.length)]
	     
	     
     });
    
} else 


    if(message.content.startsWith (prefix + "upright") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
        const ListEmbed = new Discord.RichEmbed()
             .setAuthor("Usuarios Upright:", "https://i.imgur.com/1gKp70Y.png")
	     .setColor(embedYellow)
	    .setThumbnail("https://i.imgur.com/1gKp70Y.png")
            .setDescription(message.guild.roles.get('455135672592760832').members.map(m=>m.user.tag).join('\n'));
	    
        message.channel.send(ListEmbed);  
	    
      message.delete(0000); //borra el mensaje en 0000 milisegundos (1000 = 1 seg)
    }else
	
 if(message.content.startsWith (prefix + "reverse") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
        const ListEmbed = new Discord.RichEmbed()
	    .setAuthor("Usuarios Upright:", "https://i.imgur.com/tODBzy2.png")
            
	    .setColor(embedPurple)
	    .setThumbnail("https://i.imgur.com/tODBzy2.png")
            .setDescription(message.guild.roles.get('455135602929565696').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);      

      message.delete(0000); //borra el mensaje en 0000 milisegundos (1000 = 1 seg)

   
    }	else
	    
 if(message.content.startsWith (prefix + "mixto") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
        const ListEmbed = new Discord.RichEmbed()
     .setAuthor("Usuarios Upright:", "https://i.imgur.com/Q8uZ3mI.png")
	    .setColor(embedBlue)
	    .setThumbnail("https://i.imgur.com/Q8uZ3mI.png")
            .setDescription(message.guild.roles.get('434695269897207819' || "434695066167279616").members.map(m=>m.user).join('\n'));
	   
        message.channel.send(ListEmbed);      

      message.delete(0000); //borra el mensaje en 0000 milisegundos (1000 = 1 seg)

   
    }	else
	   if (message.content.startsWith(prefix + "say") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
      message.delete(0000); //Supposed to delete message
      message.channel.send(message.content.slice(4, message.content.length));
  } else
	     if (message.content.startsWith(prefix + "ojos") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
message.delete()
	message.channel.send('👀').then(msg => {
		setTimeout(() => {
			msg.edit('<:ojos:453450937168822273>').then(msg => {
				setTimeout(() => {
					msg.edit('👀').then(msg => {
						setTimeout(() => {
							msg.edit('<:ojos:453450937168822273>').then(msg => {
								setTimeout(() => {
									msg.edit('👀').then(msg => {
										setTimeout(() => {
											msg.edit('<:ojos:453450937168822273>').then(msg => {
												setTimeout(() => {
													msg.edit('👀').then(msg => {
														setTimeout(() => {
															msg.edit('<:ojos:453450937168822273>')
																msg.edit('👀').then(msg => {
																	setTimeout(() => {
																		msg.edit('<:ojos:453450937168822273>')
																
																	}, 500)
																})
														}, 500)
													})
												}, 500)
											})
										}, 500)
									})
								}, 500)
							})
						}, 500)
					})
				}, 500)
			})
		}, 500)
	})
}else
	     if (message.content.startsWith(prefix + "oveja")  ) {
message.delete()
	message.channel.send(':tada: <:sheep1:461543333223989258> :balloon:').then(msg => {
		setTimeout(() => {
			msg.edit(':tada: <:sheep2:461543351443914759> :balloon:').then(msg => {
				setTimeout(() => {
					msg.edit(':tada: <:sheep1:461543333223989258> :balloon:').then(msg => {
						setTimeout(() => {
							msg.edit(':tada: <:sheep2:461543351443914759> :balloon:').then(msg => {
								setTimeout(() => {
									msg.edit(':tada: <:sheep1:461543333223989258> :balloon:').then(msg => {
										setTimeout(() => {
											msg.edit(':tada: <:sheep2:461543351443914759> :balloon:').then(msg => {
												setTimeout(() => {
													msg.edit(':tada: <:sheep1:461543333223989258> :balloon:').then(msg => {
														setTimeout(() => {
															msg.edit(':tada: <:sheep2:461543351443914759> :balloon:')
																msg.edit(':tada: <:sheep1:461543333223989258> :balloon:').then(msg => {
																	setTimeout(() => {
																		msg.edit(':tada: :birthday:<:sheep2:461543351443914759> :birthday: :balloon:')
																
																	}, 500)
																})
														}, 500)
													})
												}, 500)
											})
										}, 500)
									})
								}, 500)
							})
						}, 500)

					})
				}, 500)
			})
		}, 500)
	})
}else
	   if (message.content.startsWith(prefix + "adminc") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
   
    const embed = new Discord.RichEmbed()
  .setTitle("Lista de comandos (de administrador):")
  .setAuthor("KeyBladeFighters", "https://i.imgur.com/dnyKx2z.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)

  .setFooter("Cualquier sugerencia o ayuda es aceptada.", "https://i.imgur.com/dnyKx2z.jpg")
  .setThumbnail("https://i.imgur.com/dnyKx2z.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://steamcommunity.com/id/Shoowderify/")
  .addField("!doit , !galleta , !supergalleta , !mira",
    "Descripcion: Publica una imagen")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("!upright , !reverse", "Descripcion: Publica una lista del respectivo rol", true)
     .addField("!apruebo , !enojo , !risa", "Descripcion: Publica un gif", true)
  /*
   * Blank field, useful to create some space.
   */
 .addField("!ojos", "Descripcion: Publica el emoji de ojos, pero con una animacion de 3 segundos", true)
        
      .addField("!adminc , !comandos", "Descripcion: Publica una lista de comandos   ", true)
        .addField("!ping!", "Descripcion: Responde con: Pong!", true)

    
      .addField("!regaño [@usuario] , !abrazo  [@usuario]", "Descripcion: Regaña o abraza a un usuario (con respectivo gif)", true)
        .addField("!latigo , !latigo [@usuario]", "Descripcion:Puede ser usado en contra de alguien en especifico, o para todos (!latigo)", true)

	     .addField("!atributo", "Descripcion: Permite elegir el atributo( upright y reverse)", true)
    
  .addField("!say", "Descripcion:El bot dice que tu quieras", true);
		   
	
  

		    
  message.channel.send({embed});	
		    
	
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

const { Client, Util } = require('discord.js');
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const client = new Client({ disableEveryone: true });

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

	if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No or invalid value entered, cancelling video selection.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 I could not obtain any search results.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Paused the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}



client.login("NDQ0NTk0NDMxOTk2NDYxMDU4.DdeUNA.yqvkC_T7DUkMJyvY2c7Sf6OjM9U");
