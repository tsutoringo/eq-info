const { channels } = require("../config");
const { Client, EEW } = require("kyoshin-monita");
const bot = require("./bot");
const createEmbed = require("./kyoshin-monita/createEmbed")

const kyoshinMonita = new Client({
	updateFrequency: 1000
});

kyoshinMonita.on("newReport", ({eew, imageURLs}) => {
	bot.channels.fetch(channels.kyoshinMonita).then(channel => {
		return channel.send("", {
			embed: createEmbed(eew)
		})
	}).then(message => {
		if (eew.is.final || eew.is.firstReport || !(eew.report.num % 10)) message.crosspost();
	});
});

kyoshinMonita.on("ready", () => {
	console.log("[kyoshin-monita] Start watching 強震モニタ");
})

module.exports = kyoshinMonita;
