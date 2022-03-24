const express = require('express')
const userRouter = express.Router()
const userController = require('./../controllers/userControler')
const {checkToken} = require('../middleware/authentication')
const {checkRoleAdmin} = require('../middleware/authorization')
const {fileUpload} = require('../middleware/upload')


userRouter
        .get('/',checkToken, userController.getAllCustommer)
        .get('/profile',checkToken, userController.getUser)
        .patch('/edit/updatetokenfcm', userController.updateTokenFcm)
        .patch('/edit/editpassword',checkToken, userController.editPassword)
        .patch('/edit/resetpassword', userController.resetPassword)
        .post('/edit/forgotpassword', userController.forgotPassword)
        .patch('/',checkToken, fileUpload, userController.updateUser)
        .delete('/:userId',checkToken, checkRoleAdmin, userController.deleteUser)

module.exports = userRouter