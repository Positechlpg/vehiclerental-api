const express = require('express')
const userRouter = express.Router()
const userController = require('./../controllers/userControler')


userRouter
        .get('/', userController.getAllCustommer)
        .get('/:userId', userController.getUser)
        .patch('/:userId', userController.updateUser)
        .post('/login', userController.login)
        .post('/createuser', userController.createUser)
        .delete('/:userId',userController.deleteUser)

module.exports = userRouter