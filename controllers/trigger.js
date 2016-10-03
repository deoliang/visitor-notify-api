const pg = require('./pg.js')

exports.index = function (req, res) {
	if(req.query.status == 'start') {
		pg.start()
		res.send('Database has been updated')
	}else if (req.query.status == 'end') {
		pg.end()
		res.send('Database has been updated')
	}else{
		res.send('Nothing changed')
	}
}