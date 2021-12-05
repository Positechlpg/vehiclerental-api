const express = require("express")
const mainRouter = express.Router()
const userRouter = require('./users.js')
const vehicleRouter = require('./vehicle.js')
const historyRouter = require('./history.js')

mainRouter.use('/users', userRouter)
mainRouter.use('/vehicle',vehicleRouter)
mainRouter.use('/history',historyRouter)

module.exports = mainRouter