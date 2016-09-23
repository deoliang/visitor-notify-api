const express = require('express')
const app = express()

app.set('port',(process.env.PORT || 5000))

app.get('/', function (req, res) {
  if(req.query.status == 'start' || req.query.status == 'end') {
    res.send('Database has been updated')
  }else{
    res.send('Nothing changed')
  }
})

app.listen(app.get('port'), function(){
  console.log("app is running at " + app.get('port'))
});