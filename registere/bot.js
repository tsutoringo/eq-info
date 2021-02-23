require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
	console.info(
		`===================================\n`+
		`Discord bot is Ready...\n`+
		`made by tsutoringo#7933\n`+
		`Bot user: ${bot.user.tag}\n`+
		`===================================`
	);
});

module.exports = bot;
