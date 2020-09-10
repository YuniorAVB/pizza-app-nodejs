require('dotenv').config()

const express = require('express')
const config = require('./config')
const socket = require('socket.io')
const http = require('http')
const morgan = require('morgan')

const app = express()
const server = http.createServer(app)
const io = socket.listen(server)

app.set('port', config.PORT)
app.set('host', config.HOST)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))


app.use(require('./routes/userRoutes'))


module.exports = { server, app }
