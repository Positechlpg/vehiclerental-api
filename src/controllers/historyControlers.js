const services = require('../services/historyService.js')
const httpResponse = require('../helper/httpResponse')

const getAllHistory = async (req, res) => {
    httpResponse(res, await services.getAllHistory(req.query));
}

const createHistory = async (req, res) => {
    httpResponse(res, await services.createHistory(req.body));
}

const updateHistory = async (req,res) => {
    const {historyId} = req.params
    httpResponse(res, await services.updateHistory(historyId,req.body))
}

const deleteHistory = async (req,res) => {
    const {historyId} = req.params
    httpResponse(res, await services.deleteHistory(historyId))
}

const getPopulerVhicle = async (req,res) => {
    const {location} = req.params
    httpResponse(res, await services.getPopulerVhicle(location))
}

module.exports = {getAllHistory, createHistory,updateHistory,deleteHistory,getPopulerVhicle}