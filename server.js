const express = require('express')

const app = express()

//Import server configuration
const port = require('./config/server').port

app.get('/', function(req, res) {
  res.send('Hello!!!!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})
