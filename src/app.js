const express = require('express')
const app = express()



app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', ''))
})