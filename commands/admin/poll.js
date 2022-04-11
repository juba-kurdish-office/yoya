const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const developer = "XLELORDS#2741";

module.exports = {
  name: "poll",
  description: "make a message",
  usage: "poll <channel> <message>",
  run: async (client, message, args) => {
        message.delete();
        
  
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have premmsions to do that!");

    let sayChannel = message.mentions.channels.first();
    if (!sayChannel) return message.channel.send(`:x:| ${message.author} mention a channel First`)
        let sayMsg = args.slice(1 || 0, args.length).join(" ");
        if (!sayMsg) return message.channel.send(` Say Some Message To Poll`) 
        var role = message.member.highestRole;
        var embed = new MessageEmbed()
            .setColor("RANDOM")
            .setFooter('Poll By: ' + `${message.author.username}`)
						.setDescription('**Important Links** [🤖Invite me](https://dsc.gg/infinitemaster) [📚Youtube](https://www.youtube.com/channel/UCQNEA0nc_Hw7dOH6lVZ15Gw) [📕server](https://discord.gg/cuXT5bXbHZ)')
                        .addField(`**Poll message:**`, `** ${sayMsg}**`)
                            .addField(`**Server**`, `**${message.guild.name}**`)
                            .addField(`**Author**`, `**${message.author.username}**`)
														.addField(`**Sent to:**`,`**${message.guild.memberCount} ** members`)
														.addField(`**developer:**`, 	`${developer}`)
												
													.setImage("https://media.discordapp.net/attachments/908630328984338442/912422156716097616/standard_1.gif")
        .setTimestamp()
        message.channel.send(`Your poll Is Ready On <#${sayChannel.id}>`)
        sayChannel.send({embed}).then(m => {
            m.react('✅');
            m.react('❌')
           }) 
    .catch({});

    }
};