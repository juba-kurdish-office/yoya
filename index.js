require("dotenv").config();
require("moment-duration-format");

const economybot = require(`${process.cwd()}/handlers/economybot.js`);

const db = require("enhanced.db"),
  TOKEN = process.env.TOKEN,
  client = new economybot();

db.options({
  clearOnStart: false,
  filename: 'ec.sqlite'
})

client.login("NzkxODU2NzU3ODQ0NDc1OTE0.X-VQEw.DVzu7724D_lM_BpcexM_Io6axKg").catch(console.error);


require(`${process.cwd()}/handlers/eventHandler.js`)(client);
require(`${process.cwd()}/handlers/commandHandler.js`)(client);

client.config = require(`${process.cwd()}/Configuration/config.json`);
client.env = process.env;
client.db = db;

//process.on("unhandledRejection", (err) => {
//	console.error(err);
//});


//-----------------------------------------------------The End-----------------------------------------------------
