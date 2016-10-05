const pg = require('pg')
const json = require('../config/config.json')
const time = require('./time.js')

const start = function () {
  insert()
}

const end = function () {
  update()
}

const insert = function () {
  const query = "INSERT INTO time (starttime) VALUES(" + "'" + time.getDate()  + "')"
  callDB(query)
}

const update = function () {
	const query ="UPDATE time SET endtime=" + "'" + time.getDate()  + "' WHERE id in (SELECT max(id) from time)"
	callDB(query)
}

const callDB = function (query) {
  pg.defaults.ssl = true;
  pg.connect(json.postgresUrl, function(err, client) {
   if (err) throw err

   client
    .query(query, function(err) {
      if (err) throw err
    })
    .on('row', function(row) {
      return row
    })
  })  
}

module.exports = {
  start : start,
  end : end
}