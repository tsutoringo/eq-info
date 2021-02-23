require("dotenv").config();
const bot = require("./registere/bot");
const kyoshinMonita = require("./registere/kyoshin-monita");

bot.on("ready", () => {
	kyoshinMonita.start(new Date());
});

bot.login(process.env.DISCORD_BOT_TOKEN);
