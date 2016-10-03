const date = new Date()
date.setUTCHours(date.getUTCHours() - 7);

const getDate = function () {
	const dateToString = date.toUTCString()
	return dateToString
}

module.exports = {
	getDate : getDate
}