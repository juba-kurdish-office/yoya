const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "announce",
run: async(client, message, args) => {
let say = message.content.split(" ").slice(1).join(" ")
 if(!say) return message.channel.send(`❌ | `+"i cannot say nothing sir")

 message.delete();


let embed = new MessageEmbed()
.setColor('RANDOM')
.setTitle(`📢 announcement`)
.addField(`💬 content:`, `${say}`)
.addField(`💻 Server:`, `${message.guild.name}`)
.addField(`👑 Author:`, `<@${message.author.id}>`)
.addField(`🫂 Members:`, `${message.guild.memberCount}`)
.setTimestamp()
.setFooter(`Thanks for using me mr ${message.author.username} 📕`);

message.channel.send(embed)
}
}