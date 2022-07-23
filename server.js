const express = require('express')
const server = express()
const cors = require('cors')
const routers = require('./src/routers')
const morgan = require('morgan')
const logger = morgan('combined') 


const corsOptions = {
    origin: '*',
  }

server.use('/public', express.static("public"))
server.use(cors(corsOptions))
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(logger)
server.use("", routers)
module.exports = server