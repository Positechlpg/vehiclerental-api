const express = require("express")
const mainRouter = express.Router()
const userRouter = require('./users.js')
const vehicleRouter = require('./vehicle.js')
const historyRouter = require('./history.js')
const authRouter = require('./auth.js')
const notifRouter = require("./notif.js")

mainRouter.use('/users', userRouter)
mainRouter.use('/vehicle',vehicleRouter)
mainRouter.use('/history',historyRouter)
mainRouter.use('/auth',authRouter)
mainRouter.use('/notif',notifRouter)

module.exports = mainRouter