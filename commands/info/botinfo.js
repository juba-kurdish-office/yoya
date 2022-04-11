
const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')
const owner = 'Dan Bro#3260';
const developer = 'XLELORDS#2741';
const votes = 'soon';

module.exports = {
name: "botinfo",
aliases: ["about"],
run: async(client, message, args) => {

let embed = new MessageEmbed()
.setTitle(`Bot Info`)
.addField(`📨 Servers:`, `${client.guilds.cache.size}` )
.addField(`🫂 Users`, `${client.users.cache.size}`)
.addField(`👨‍🔧 Developer`, `<@730549617044750346>`)
.addField(`📤 MemberCount`, `${message.guild.memberCount}`)
.addField(`🏛 ServerName`, `${message.guild.name}`)
.addField(`🚀 ServerID`, `${message.guild.id}`)
.addField(`🔗 Support`, `[support server](https://discord.gg/mike)`)
.addField(`🚧 Votes`, `${votes}`)
.setFooter(`Requested by: ${message.author.username}`)
.setImage(`https://cdn.discordapp.com/attachments/915113355012882464/920792725585002576/standard_1.gif`)
message.channel.send(embed)
}
}
