const express = require('express')
const server = express()
const routers = require('./src/routers')

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api", routers)
module.exports = server