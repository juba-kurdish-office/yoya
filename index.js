


const { Discord, Client } = require("discord.js");
const bot = new Client({
  intents: [
    "GUILDS",
    "GUILD_INVITES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_VOICE_STATES",
"GUILD_MESSAGE_REACTIONS"
  ],
  allowedMentions: {
    parse: ["everyone", "roles", "users"],
    repliedUser: true
  },
  partials: ["CHANNEL", "GUILD_MEMBER","GUILD_REACTIONS", "MESSAGE", "REACTION", "USER"]
});
///const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD] });

const { Util } = require("discord.js");
const fs = require("fs");
const prefix = "y!";
const { Collection, MessageEmbed } = require("discord.js");
const beautify = require("js-beautify");
const { inspect } = require("util");
let dev = ["730549617044750346"];
const cmd = require("node-cmd");
const { I18n } = require("locale-parser");
bot.reva = new I18n({ defaultLocale: "en" });

global.logChannel = bot.channels.cache.get("891641446283759646")
 
global.mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jubadevlopment:g112233s@cluster0.js1to.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to the Mongodb database.");
  })
  .catch(err => {
    console.log("Unable to connect to the Mongodb database. Error:" + err);
  });

global.Guild = require("./data/guild.js");
global.User = require("./data/user.js");
global.Owner = require("./data/owner.js");
global.Prime = require("./data/prime.js");
global.Lang = require("./data/lang.js");
global.Black = require("./data/blacklist");
bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.catagories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handler/${handler}`)(bot);
});

/**/
let util = require("util"),
  readdir = util.promisify(fs.readdir);

const init = async () => {
  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  console.log(`Loading a total of ${evtFiles.length} events.`, "log");
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = new (require(`./events/${file}`))(bot);
    bot.on(eventName, (...args) => event.run(...args, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
};
init();

bot.on("ready", () => {
  console.log(`[!]-------------------------------------[!]`);
  console.log(`Display Name ; ${bot.user.username}`);
  console.log(`Public Prefix : ${prefix}`);
  console.log(`Version : 4.0.0`);
  console.log(`[!]-------------------------------------[!]`);
});

bot.on("ready", () => {
  bot.user.setActivity("yohelp | Updated: 1.0.0V", { type: "WATCHING" });
});
///////////


bot.on("messageCreate", async message => {
  let guild = await Guild.findOne({ guildID: message.guild.id })
  if (message.content.startsWith(`<@${bot.user.id}>`)) {
    return message.reply({ content: `My prefix is \`${guild.prefix}\`` });
  }
});

/////


bot.login("NzkxODU2NzU3ODQ0NDc1OTE0.X-VQEw.NpTiTkY_yYJ01_wzTTlEmq5pzvk");


