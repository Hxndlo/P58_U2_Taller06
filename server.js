const express = require('express')
const bodyParser = require('body-parser')

var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )

app.use(require('./network/routes'))

let puerto = 3000

app.use('/', express.static('public'))

app.listen(puerto)
console.log( `La aplicación está escuchando en http://localhost:${puerto}`)