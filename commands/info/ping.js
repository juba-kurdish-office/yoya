
   module.exports = {
 name: 'ping',
 description: "shows the bot/'s ping",
 run: async (client, message, args) => {
  message.channel.send('**The Ping-inator!**\nPinging...').then((msg) => {
   var ping = msg.createdTimestamp - message.createdTimestamp;
   msg.edit("**The Ping-inator!**\nPong! bot's ping is `" + ping + 'ms`.');
  });
 },
};
