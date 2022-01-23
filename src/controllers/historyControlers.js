const services = require('../services/historyService.js')
const httpResponse = require('../helper/httpResponse')
const ServiceResponse = require('../helper/ServiceResponse')

const getAllHistory = async (req, res) => {
    try {
        httpResponse(res, await services.getAllHistory(req.query));
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getHistoryByUserId = async (req, res) => {
    try {
        const { userId } = req.params
        httpResponse(res, await services.getVehicleById(userId))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const createHistory = async (req, res) => {
    try {
        httpResponse(res, await services.createHistory(req.body));
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const updateHistory = async (req, res) => {
    try {
        const { historyId } = req.params
        httpResponse(res, await services.updateHistory(historyId, req.body))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const deleteHistory = async (req, res) => {
    try {
        const { historyId } = req.params
        httpResponse(res, await services.deleteHistory(historyId))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getPopulerVhicle = async (req, res) => {
    try {
        const { location } = req.params
        httpResponse(res, await services.getPopulerVhicle(location))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

module.exports = { getAllHistory, createHistory, updateHistory, deleteHistory, getPopulerVhicle,getHistoryByUserId }