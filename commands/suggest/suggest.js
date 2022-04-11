 const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
 
module.exports = {
  name: "suggest",
  category:"suggestion",
  
  run: async (client, message, args) => {
   
  let channel = await db.fetch(`suggestion_${message.guild.id}`);
    if (channel === null) return;
  
  const suggestionQuery = args.join(" ");
  if(!suggestionQuery) return message.reply("Please Suggest Something.");
    
  const embed = new MessageEmbed()
         
       .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
       .addField(`📨 Suggested:`, `${suggestionQuery}`)
		   .addField(`⭐ Suggested by:`, `${message.author.username}`)
		.addField(`🛡 Server:`, `${message.guild.name}`)
       .setTimestamp();
       
    const done = new MessageEmbed()
       .setDescription(`<:bfdyes:832931453892558848>  | Your suggestion is Submitted here, <#${channel}>\n\nNote: You agreed to get a DM on a reply over your Suggestion!`)
       .setColor("00FFFF")
       
    message.channel.send(done)
    
    let msgEmbed = await message.guild.channels.cache.get(channel).send(embed)
    
    await msgEmbed.react('✅')
    await msgEmbed.react('🚫')
  }
}