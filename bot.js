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
const rando_oiezi = [
'https://78.media.tumblr.com/606d134e5707fda77c1829beda78b48f/tumblr_mg2lexqQbm1r8tdf1o1_500.gif',
'https://78.media.tumblr.com/99bbe55f355dc70f078aee30e65119dc/tumblr_mg2lexqQbm1r8tdf1o2_500.gif',
'https://78.media.tumblr.com/b78d2bf0da2d1f2e54f25bfbda5c745b/tumblr_mg2lexqQbm1r8tdf1o3_500.gif',
'https://78.media.tumblr.com/45e4d0b521358773ae6f1699aebc86e6/tumblr_mg2lexqQbm1r8tdf1o4_500.gif',
'https://78.media.tumblr.com/b5b6a0545211d764d6faa76f5b41ed5a/tumblr_mg2lexqQbm1r8tdf1o5_500.gif',
'https://78.media.tumblr.com/a579e169b2f782a8e1e2f0681efefb71/tumblr_mg2lexqQbm1r8tdf1o6_500.gif',
'https://78.media.tumblr.com/201404a2ab7128d0fa57516bcef57c26/tumblr_mg2lexqQbm1r8tdf1o7_500.gif',	
'https://78.media.tumblr.com/c2f592110a447ab5c72caeecb9d9c8fa/tumblr_mg2lexqQbm1r8tdf1o8_500.gif',	
'https://78.media.tumblr.com/dde5475c890543a4cdc201a171eb9bef/tumblr_mg2lexqQbm1r8tdf1o9_500.gif',	
'https://78.media.tumblr.com/e79b4dc6967ee8354f05a5cf95bba8d9/tumblr_mg2lexqQbm1r8tdf1o10_500.gif',	
'http://media.tumblr.com/dc1768b2f2bc6a64514212a38c5bb12e/tumblr_inline_mg2lb1vXSG1r4pf7e.gif',	
'http://media.tumblr.com/9090f76aa226ba85630f89e436eea790/tumblr_inline_mg2lb5nCXa1r4pf7e.gif',	
'http://media.tumblr.com/c4150f3e0b5de8a6ae21f19218188d77/tumblr_inline_mg2lbaz7R21r4pf7e.gif',	
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
    "golpeó con su keyblade a <:keyblade:492483606179086347> " ,
    "ha usado impactrueno en contra de <:impac:492484169901932546> " ,
    "usó de limpia pisos a " ,
    "le ha dado una patada en el lóbulo occipital a " ,
    "usó granizo de Farron en contra de " ,
    " <:bible:492484567484203008> le ha lanzado lagrimas a  " ,
    "pisoteó a " ,
    "lanzó un Kamehameha a <:kame:492485404973465600> " ,
    "hizo un fatality a " ,
    "le lanzó un caparazón de tortuga a <:caparaz:492485601032011788> " ,
    "se enojó y usó ira primigenia en contra de " ,
    "se comió una flor <:floria:492486028523733013>  y le lanzó bolas de fuego a <:mario:492485956251942923> " ,
    "usó FUS-RO-DAH! en contra de " ,
    "usó Látigo cepa en contra de " ,
    " :fire: :sheep: :fire: ha quemado como a una oveja a " ,
    "usó su espada de diamante en contra de <:espadamc:492486421207318528> " ,
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
	
		

		
	member.addRole(member.guild.roles.find("name", "⇙ In Development ⇘"));
		
	member.addRole(member.guild.roles.find("name", "↬                                                 Estado                                    ↫"));
	
	member.addRole(member.guild.roles.find("name", "↯                                                 Atributo                                    ↯"));
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
            await message.react(':a:');
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
	
	      case "coinflip":
        let answers = [
            'cara',
            'sello'
        ];

        message.channel.send({embed: {
            color: 3447003,
            title: "Coinflip:",
            fields: [{
                name: "Resultado",
                value: `\`${answers[~~(Math.random() * answers.length)]}\``
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
             
            }
          }
        });
        break;
	
     
		    
        case "dog":
      
        const dogsuperagent = require('superagent');

        let {body} = await dogsuperagent
        .get(`https://random.dog/woof.json`);

        let dogpicembed = new Discord.RichEmbed()
        .setColor('#ff9900')
        .setTitle('Fotodog')
        .setImage(body.url);

        message.channel.send(dogpicembed);
        break;
	
 case "anime":
    
        const animesf = require('snekfetch');

            let res = await animesf.get('http://api.cutegirls.moe/json');
            if (res.body.status !== 200) {
                return message.channel.send('An error occurred while processing this command.');
            }
            let animepicembed = new Discord.RichEmbed()
            .setColor('#f266f9')
            .setTitle('Anime Picture')
            .setImage(res.body.data.image);
    
            message.channel.send(animepicembed);
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
	    if(message.content.startsWith (prefix + "latigo") && message.member.roles.some(r=>["administrador", "moderador", "♔ King ♔ KB Rangers"].includes(r.name)) ) {

        let member = message.mentions.members.first()
	message.delete(0000);
		      if(message.mentions.users.size < 1) return message.channel.send("Latigazo para todos!", {files: ["https://media.giphy.com/media/3orieMQ7zX5X633T2g/giphy.gif"]});
     message.channel.send(` ${member} fue azotado por ${message.author}  !`, {
    file: rando_latigo[Math.floor(Math.random() * rando_latigo.length)]
	     
	     
     });
  
    
} else 
	 if(message.content.startsWith (prefix + "remo") && message.member.roles.some(r=>["administrador", "moderador", "♔ King ♔ KB Rangers"].includes(r.name)) ) {

        let member = message.mentions.members.first()
	message.delete(0000);
		      if(message.mentions.users.size < 1) return message.channel.send("Hay remo para todos!", {files: ["https://thumbs.gfycat.com/BaggyAppropriateErne-small.gif"]});
     message.channel.send(`Hay remo para ti ${member} !`, {
    files:["https://thumbs.gfycat.com/BaggyAppropriateErne-small.gif"]
	     
	     
     });
  
    
} else 
	 

	 if(message.content.startsWith (prefix + "enfado") && message.member.roles.some(r=>["administrador", "moderador", "♔ King ♔ KB Rangers"].includes(r.name)) ) {

        let member = message.mentions.members.first()
	message.delete(0);
     message.channel.send(``, {
     files:["https://thumbs.gfycat.com/HarmoniousTerribleLamb-small.gif"]
	     
	     
     });
    
} else 
		 if(message.content.startsWith (prefix + "regaño") && message.member.roles.some(r=>["administrador", "moderador", "♔ King ♔ KB Rangers"].includes(r.name)) ) {

        let member = message.mentions.members.first()
	message.delete(0000);
     message.channel.send(`${message.author} ha regañado a ${member} !`, {
    file: rando_rega[Math.floor(Math.random() * rando_rega.length)]
	     
	     
     });
    
} else 
	 if(message.content.startsWith (prefix + "oiezi")) {

     message.channel.send(``, {
    file: rando_oiezi[Math.floor(Math.random() * rando_oiezi.length)]
	     
	     
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
	     if(message.content.startsWith (prefix + "upright") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
        const ListEmbed = new Discord.RichEmbed()
	    .setAuthor("Usuarios Upright:", "https://i.imgur.com/tODBzy2.png")
            
	    .setColor(embedPurple)
	    .setThumbnail("https://i.imgur.com/tODBzy2.png")
            .setDescription(message.guild.roles.get('455135672592760832').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);      
  message.delete(1000);
     //borra el mensaje en 0000 milisegundos (1000 = 1 seg)
 
   
    }	else
	         if(message.content.startsWith (prefix + "fighter") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
        const ListEmbed = new Discord.RichEmbed()
	    .setAuthor("Keyblade Fighters", "https://i.imgur.com/dnyKx2z.jpg")
            
	    .setColor(embedPurple)
	    .setThumbnail("https://i.imgur.com/dnyKx2z.jpg")
            .setDescription(message.guild.roles.get('455137900036882433').members.map(m=>m.user.tag).join('\n'));
        message.channel.send(ListEmbed);      
  message.delete(1000);
     //borra el mensaje en 0000 milisegundos (1000 = 1 seg)
 
   
    }	else
	             if(message.content.startsWith (prefix + "rangers") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
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
			msg.edit('<:eyes2:492488093538975758>').then(msg => {
				setTimeout(() => {
					msg.edit('👀').then(msg => {
						setTimeout(() => {
							msg.edit('<:eyes2:492488093538975758>').then(msg => {
								setTimeout(() => {
									msg.edit('👀').then(msg => {
										setTimeout(() => {
											msg.edit('<:eyes2:492488093538975758>').then(msg => {
												setTimeout(() => {
													msg.edit('👀').then(msg => {
														setTimeout(() => {
															msg.edit('<:eyes2:492488093538975758>')
																msg.edit('👀').then(msg => {
																	setTimeout(() => {
																		msg.edit('<:eyes2:492488093538975758>')
																
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
   .addField("!mensaje", "Descripcion: Publica imagen en spam-town", true)
     .addField("!remo, !remo [@usuario]", "Descripcion:Puede ser usado en contra de alguien en especifico, o para todos (!remo)", true)
   
      .addField("!regaño [@usuario] , !abrazo  [@usuario]", "Descripcion: Regaña o abraza a un usuario (con respectivo gif)", true)
        .addField("!latigo , !latigo [@usuario]", "Descripcion:Puede ser usado en contra de alguien en especifico, o para todos (!latigo)", true)

	     .addField("!atributo", "Descripcion: Permite elegir el atributo( upright y reverse)", true)
    
  .addField("!say", "Descripcion:El bot dice que tu quieras", true);
		   
	
  

		    
  message.channel.send({embed});	
		    
	
            }
	

});


	
client.on("message", message =>  { // EventEmitter

	if(message.content == "!pingp"){ // Check if message is "!ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
			});
		}
});
	
client.on("message", message =>  { 

	if(message.content == "!mensaje" && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ){ // Check if message is "!ping"
			client.channels.get("455134311197179907").send("hola!") 
			
		}
});
		
    client.on("message", message =>  { 

	if(message.content == "!mess" && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ){ // Check if message is "!ping"
			client.channels.get("467801888029409303").send("hola!", {files: ["https://media.giphy.com/media/3orieMQ7zX5X633T2g/giphy.gif"]}) 
			
		}
});
	

	
		
	
client.on("message", message =>  { 

	if(message.content == "!hola" && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ){ // Check if message is "!ping"
			Client.guilds.get(421507242748018693).channels.get(455134311197179907).send("Hola!")
			
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


	
	
client.login("NDQzOTAyNjE0ODgzNzk0OTQ1.Do1-7A.pFxl1W1Zfkr_UsESpa2NxetdjkU");
