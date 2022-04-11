const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support, invite, supportEmail } = require("../../config.json")



module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`${bot} Help pages`)
    .setDescription(` Hello **${message.author.username}**, \n *Choose an category below to see commands* \n\n :question: New to ${bot}? Check out server \n https://discord.com/api/oauth2/authorize?client_id=862989897954623500&permissions=1634503490528&scope=bot%20applications.commands \n\n Also Join Our Developer Server \n https://discord.gg/jHPs78cVFh`)
		.setImage(`https://media.discordapp.net/attachments/947939971669577758/949697763594088528/981f0c7b8eebaa8010ef597debb080d7.gif`)
		
		.addField(`invite me:`, `https://discord.com/api/oauth2/authorize?client_id=862989897954623500&permissions=1634503490528&scope=bot%20applications.commands`)
		.addField(`Support Email`, `${supportEmail}`)
    .setColor("RANDOM")
    .setFooter(`Requested by: ${message.author.tag}`)
		
		


    const music = new Discord.MessageEmbed()
    .setColor(Color)
		
    .setTitle(`Music`)
    .setImage(`https://media.discordapp.net/attachments/947939971669577758/949695029474111588/4musictrandrib.gif`)
    .setDescription(`<:emoji_20:949016064782663710>Music page: \n\n \`join\`, \`leave\`, \`loop\`, \`nowplaying\`, \`pause\`,  \`play\`,  \`queue\`,  \`remove\`,  \`resume\`,  \`search\`,  \`skip\`,  \`skipall\`,  \`stop\`,`)
    .setFooter(`Requested by: ${message.author.tag}`)



    const info = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Info Page`)
	
		.setImage(`https://media.discordapp.net/attachments/947939971669577758/949695556618420244/LOGO_INFO.gif`)
    .setDescription(`Here are all the Info commands: \n\n \`help\`, \`invite\`, \`ping\`,`)
    .setFooter(`Requested by: ${message.author.tag}`)

		const admin = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Admin Page`)
		.setImage(`https://media.discordapp.net/attachments/947939971669577758/949696401233805332/pp_logo.gif`)
		.setDescription(`Here are all the Admin commands: \n\n \`purge\`, \`poll\`, \`announce\`,`)
	.setFooter(`Requested by: ${message.author.tag}`)

const economy = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`economy Page`)
.setImage(`https://media.discordapp.net/attachments/947939971669577758/949693911583064144/economy.gif`)
.setDescription(`Here are all the economy commands: \n\n \`cash |c\`/ \`daily |d\`/ \`deposit‌ |dep\`/ \`withdraw |wd\`/ \`send\`/ \`roulette |r\`/ \`slots‌ |sl\`/ \`weekly |week\`/ \`work\`/`)

		const ticket = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Ticket Page`)
		.setImage(`https://media.discordapp.net/attachments/947939971669577758/949696848195624991/ticket_2__converted__3.gif`)
	.setDescription(`Here are all the Ticket commands: \n\n \`open\`, \`close\`,`)

		 const suggest = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`suggest page`)
.setImage(`https://media.discordapp.net/attachments/947939971669577758/949697263133917274/attachment_83773038-1.gif`)
    .setDescription(`Here are all the suggest commands: \n\n \`set-suggest\`, \`suggest\`,`)
    .setFooter(`Requested by: ${message.author.tag}`)






    let button1 = new MessageButton()
    .setLabel(`Music`)
    .setID(`music`)
	
    .setStyle("blurple")
		.setEmoji('963038940665876511');
    

    let button2 = new MessageButton()
    .setLabel(`Info`)

    .setID(`info`)
    .setStyle("green")
.setEmoji('🎁');

		let button3 = new MessageButton()
    .setLabel(`admin`)
    .setID(`admin`)
    .setStyle("green")
.setEmoji('👨‍🔧');

let button4 = new MessageButton()
    .setLabel(`economy`)
	
    .setID(`economy`)
    .setStyle("green")
.setEmoji('💰');
      
		let button5 = new MessageButton()
    .setLabel(`ticket system`)
	
    .setID(`ticket`)
    .setStyle("red")
.setEmoji('🎫');

		let button6 = new MessageButton()
    .setLabel(`suggest systen`)
    .setID(`suggest`)
    .setStyle("blurple")
		.setEmoji('📨');




    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4, button5);



const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "music") {

            MESSAGE.edit(music, row);
            await b.reply.defer()
            
        }

				if(b.id == "admin") {

            MESSAGE.edit(admin, row);
            await b.reply.defer()
            
        }

         if(b.id == "info") {

            MESSAGE.edit(info, row);
            await b.reply.defer()
            
        }

				if(b.id == "suggest") {

            MESSAGE.edit(suggest, row);
            await b.reply.defer()
            
        }

       if(b.id == "economy") {

            MESSAGE.edit(economy, row);
            await b.reply.defer()
            
        }

				if(b.id == "ticket") {

            MESSAGE.edit(ticket, row);
            await b.reply.defer()
            
        }
    });
}};
