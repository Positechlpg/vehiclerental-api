const express = require('express')
const historyRouter = express.Router()
const historyController = require('./../controllers/historyControlers')
const {checkToken} = require('../middleware/authentication')

historyRouter
        .get('/',checkToken, historyController.getAllHistory)
        .get('/historyuser/:userid',checkToken, historyController.getHistoryByUserId)
        .post('/createhistory',checkToken,historyController.createHistory)
        .put('/:historyId',checkToken,historyController.updateHistory)
        .delete('/:historyId',checkToken, historyController.deleteHistory)
        .get('/vehiclelocation/:location', historyController.getPopulerVhicle)

module.exports = historyRouter