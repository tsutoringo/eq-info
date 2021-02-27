module.exports = function (t, e) {
	return new Promise((resolve, reject) => {
		t[`on${e}`] = ()  => {
			resolve()
		}
	})
}