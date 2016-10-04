const date = new Date()
date.setUTCHours(date.getUTCHours() - 7);

const getDate = function () {
	const dateToString = date.toUTCString().replace('GMT', '').trim()
	return dateToString
}

module.exports = {
	getDate : getDate
}