const Discord = require('discord.js');

const fs = require('fs');
let XP = JSON.parse(fs.readFileSync('./XP.json', 'utf8'));



const yourID = "125557470616616960";
const setupCMD = "!atributo"
let initialMessage = `**Elije tu atributo**`;
const roles = ["Upright", "Reverse"];
const reactions = ["428233218895118357", "428233668235100170"];

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
    "golpeó con su keyblade a " ,
    "ha usado impactrueno en contra de " ,
    "usó de limpia pisos a " ,
    "le ha dado una patada en el lóbulo occipital a " ,
    "usó granizo de Farron en contra de " ,
    "<:BibleThump:454069403437236226> le ha lanzado lagrimas a  " ,
    "pisoteó a " ,
    "lanzó un Kamehameha a " ,
    "hizo un fatality a " ,
    "le lanzó un caparazón de tortuga a " ,
    "se enojó y usó ira primigenia en contra de " ,
    "se comió una flor y le lanzó bolas de fuego a " ,
    "usó FUS-RO-DAH! en contra de " ,
    "usó Látigo cepa en contra de " ,
    " :fire: :sheep: :fire: ha quemado como a una oveja a " ,
    "usó su espada de diamante en contra de " ,
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
	
		
	member.addRole(member.guild.roles.find("name", "↯                                                 Atributo                                    ↯"));
		
	member.addRole(member.guild.roles.find("name", "⇙ In Development ⇘"));
		
	member.addRole(member.guild.roles.find("name", "↬                                                 Estado                                    ↫"));
	
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
    if (message.member.roles.some(r=>["administrador", "moderador", "KeyBlade Fighters (BOT)"].includes(r.name)) && message.content.toLowerCase() == setupCMD){
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
	      message.delete(1000);
	 //borra el mensaje en 0000 milisegundos (1000 = 1 seg)
	  
    }else
	
 if(message.content.startsWith (prefix + "reverse") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
        const ListEmbed = new Discord.RichEmbed()
	    .setAuthor("Usuarios Upright:", "https://i.imgur.com/tODBzy2.png")
            
	    .setColor(embedPurple)
	    .setThumbnail("https://i.imgur.com/tODBzy2.png")
            .setDescription(message.guild.roles.get('455135602929565696').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);      
  message.delete(1000);
     //borra el mensaje en 0000 milisegundos (1000 = 1 seg)
     
   
    }	else
	     if(message.content.startsWith (prefix + "kas") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
        const ListEmbed = new Discord.RichEmbed()
	    .setAuthor("Usuarios Upright:", "https://i.imgur.com/tODBzy2.png")
            
	    .setColor(embedPurple)
	    .setThumbnail("https://i.imgur.com/tODBzy2.png")
            .setDescription(message.guild.roles.get('455138716529459202').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);      
  message.delete(1000);
     //borra el mensaje en 0000 milisegundos (1000 = 1 seg)
 
   
    }	else
	         if(message.content.startsWith (prefix + "f") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
        const ListEmbed = new Discord.RichEmbed()
	    .setAuthor("Keyblade Fighters", "https://i.imgur.com/dnyKx2z.jpg")
            
	    .setColor(embedPurple)
	    .setThumbnail("https://i.imgur.com/dnyKx2z.jpg")
            .setDescription(message.guild.roles.get('455137900036882433').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);      
  message.delete(1000);
     //borra el mensaje en 0000 milisegundos (1000 = 1 seg)
 
   
    }	else
	             if(message.content.startsWith (prefix + "reverse") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
        const ListEmbed = new Discord.RichEmbed()
	    .setAuthor("Keyblade Rangers", "https://i.imgur.com/rkfgpxv.jpg")
            
	    .setColor(embedPurple)
	    .setThumbnail("https://i.imgur.com/rkfgpxv.jpg")
            .setDescription(message.guild.roles.get('464039546104053760').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);      
  message.delete(1000);
     //borra el mensaje en 0000 milisegundos (1000 = 1 seg)
 
   
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
	     if (message.content.startsWith(prefix + "ovejaborrar xd")  ) {
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




client.on("message", msg => {
	let prefix = "!";
	
	console.log(0)
	if(!msg.content.startsWith(prefix)) return;
	
	//console.log(0.1)
	//if(msg.author.id != "Your ID") return;
	//Only use the above for testing as only the person with that ID can use the bot.
	
	console.log("help command")
	if (msg.content.startsWith(prefix + "ayuda")) {
		msg.reply("Comandos de Exp: !ayuda, !nivel, !killcamii")
	}
	
	let userData = XP[msg.author.id];
	if (!userData) userData = {XP: 0, level: 0};
	
	let userXP = XP[msg.author.id] ? XP[msg.author.id].XP : 0;
	let curLevel = Math.floor(0.1 * Math.sqrt(userXP));
	if (curLevel > userData.level) {
		userData.level = curLevel;
		msg.reply(`Subiste a nivel **${curLevel}**!`);
	}
	
	console.log("level")
	if (msg.content.startsWith(prefix + "nivel")) {
		msg.reply(`Tu nivel es ${userData.level}, con ${userData.XP} XP actualmente.`);
	}
	
	if (!XP[msg.author.id]) XP[msg.author.id] = {XP: 0, level: 0}
	
	
	console.log("Example")
	if (msg.content.startsWith(prefix + "killcamii")) {
		userData.XP -= 5
		msg.channel.sendMessage(`${msg.author} ha matado a camii! y pagaras el precio por ello`)
	}
	
	
	console.log("Example")
	if (msg.content.startsWith(prefix + "killallen")) {
		userData.XP += 15
		msg.channel.sendMessage(`${msg.author} ha matado a allen!`)
	}
	
	console.log("Example")
	if (msg.content.startsWith(prefix + "killroxas")) {
		userData.XP += 15
		msg.channel.sendMessage(`${msg.author} ha matado a roxas!`)
	}
	
	
	console.log("passive")
	if (msg.content.startsWith("a")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("A")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("b")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("B")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("c")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("C")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("d")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("D")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("e")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("E")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("f")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("F")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("g")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("G")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("h")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("H")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("i")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("I")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("j")) {
		userData.XP += 10
	}	
	
	console.log("passive")
	if (msg.content.startsWith("J")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("k")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("K")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("l")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("L")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("m")) {
		userData.XP += 10
	}	
	
	console.log("passive")
	if (msg.content.startsWith("M")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("n")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("N")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("ñ")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("Ñ")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("o")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("O")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("p")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("P")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("q")) {
		userData.XP += 10
	}
	console.log("passive")
	if (msg.content.startsWith("Q")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("r")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("R")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("s")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("S")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("t")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("T")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("u")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("U")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("v")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("V")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("w")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("W")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("x")) {
		userData.XP += 10
	}	
	
	console.log("passive")
	if (msg.content.startsWith("X")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("y")) {
		userData.XP += 10
	}	
	
	console.log("passive")
	if (msg.content.startsWith("Y")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("z")) {
		userData.XP += 10
	}
	
	console.log("passive")
	if (msg.content.startsWith("Z")) {
		userData.XP += 10
	}
	
	console.log(XP)
	fs.writeFile('./XP.json', JSON.stringify(XP), console.error);
	
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


client.login("");
