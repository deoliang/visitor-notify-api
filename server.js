const express = require('express')
const app = express()
const trigger = require('./controllers/trigger.js')

app.set('port',(process.env.PORT || 5000))

app.get('/trigger', trigger.index)

app.listen(app.get('port'), function () {
  console.log("app is running at " + app.get('port'))
})