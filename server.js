const express = require('express')
const app = express()

app.set('port',(process.env.PORT || 5000))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(app.get('port'),function(){
  console.log("app is running at"+app.get.('port'))
});
