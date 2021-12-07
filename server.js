const express = require('express')
const server = express()
const routers = require('./src/routers')
const morgan = require('morgan')
const logger = morgan('combined') 

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(logger)
server.use("/api", routers)
module.exports = server