const express = require('express')
const notifRouter = express.Router()
const notifController = require('./../controllers/notifControler')
// const {register} = require('./../middleware/validate')

notifRouter
    .post('/notif', notifController.notifSend)
    // .post('/signup', register,authController.createUser)
    // .delete('/logout',authController.logout)


module.exports = notifRouter