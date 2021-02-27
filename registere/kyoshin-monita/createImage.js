const loadPromise = require("../../util/loadPromise");
const nfetch = require("node-fetch");
const fs = require("fs");
const Canvas   = require('canvas');

module.exports = images => {
	return new Promise((resolve, reject) => {
		const baseMap = new Canvas.Image();
		baseMap.src   = fs.readFileSync("./assets/baseMap.gif");
	
		const canvas = new Canvas.Canvas(baseMap.width, baseMap.height);
		const ctx    = canvas.getContext("2d");
		ctx.drawImage(baseMap, 0, 0, baseMap.width, baseMap.height);
		fetch(images.ESTShindo)
		.then(data => data.buffer())
		.then(buf => {
			const img = new Canvas.Image();
			img.src = buf;
			ctx.drawImage(img, 0, 0, img.width, img.height);
			return fetch(images.JMA);
		}).then(data => data.buffer())
		.then(buf => {
			const img = new Canvas.Image();
			img.src = buf;
			ctx.drawImage(img, 0, 0, img.width, img.height);
		}).then(data => data.buffer())
		.then(buf => {
			const img = new Canvas.Image();
			img.src = buf;
			ctx.drawImage(img, 0, 0, img.width, img.height);
			resolve(new Buffer(canvas.toDataURL().split(',')[1]), 'base64');
		});
	});
}
