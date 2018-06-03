module.exports = (client, message, args) => {
   if (message.content.startsWith("!prueba1") && message.member.roles.some(r=>["administrador", "moderador"].includes(r.name)) ) {
    message.channel.send("pong!");
  } 
};
