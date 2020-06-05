const express = require('express')

const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/auth', authRoutes)

module.exports = server
