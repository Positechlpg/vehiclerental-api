const express = require('express')
const userRouter = express.Router()
const userController = require('./../controllers/userControler')
const {checkToken} = require('../middleware/authentication')
const {checkRoleAdmin} = require('../middleware/authorization')
const {fileUpload} = require('../middleware/upload')


userRouter
        .get('/',checkToken, userController.getAllCustommer)
        .get('/profile',checkToken, userController.getUser)
        .patch('/',checkToken, fileUpload, userController.updateUser)
        .delete('/:userId',checkToken, checkRoleAdmin, userController.deleteUser)

module.exports = userRouter