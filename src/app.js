const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const prodRoutes = require('./routes/products')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.use('/', prodRoutes)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'main.html'))
})


module.exports = app