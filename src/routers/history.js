const express = require('express')
const historyRouter = express.Router()
const historyController = require('./../controllers/historyControlers')

historyRouter
        .get('/', historyController.getAllHistory)
        .post('/createhistory',historyController.createHistory)
        .put('/:historyId',historyController.updateHistory)
        .delete('/:historyId', historyController.deleteHistory)
        .get('/:location', historyController.getPopulerVhicle)

module.exports = historyRouter