const express = require('express')
const historyRouter = express.Router()
const historyController = require('./../controllers/historyControlers')
const {checkToken} = require('../middleware/authentication')
const {checkRoleAdmin} = require('../middleware/authorization')

historyRouter
        .get('/',checkToken, historyController.getAllHistory)
        .post('/createhistory',checkToken,historyController.createHistory)
        .put('/:historyId',checkToken,historyController.updateHistory)
        .delete('/:historyId',checkToken, checkRoleAdmin, historyController.deleteHistory)
        .get('/:location', historyController.getPopulerVhicle)

module.exports = historyRouter