module.exports = eew => ({
	"title": `${eew.is.training ? "~~":""}${eew.regionName} (${eew.is.final ? "最終報":`第${eew.report.num}報`}) ${eew.is.training ? "~~ 訓練":""}`,
	"description": "地震が発生しました。",
	"url": "https://discordapp.com",
	"color": eew.maxScale.color,
	"footer": {
		"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
		"text": "Source by 防災科研"
	},
	"author": {
		"name": "強震モニタ",
		"url": "http://www.kmoni.bosai.go.jp/"
	},
	"fields": [
		{
			"name": "__最大予測震度__",
			"value": `**${eew.maxScale}**`
		},
		{
			"name": "__マグニチュード__",
			"value": eew.magunitude,
			"inline": true
		},
		{
			"name": "__深さ__",
			"value": eew.depth,
			"inline": true
		}
	]
})
