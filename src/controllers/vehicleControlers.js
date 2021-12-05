const services = require('./../services/vehicleServices')
const httpResponse = require('../helper/httpResponse')

const getAllVehicle = async (req, res) => {
    httpResponse(res, await services.getAllVehicle(req.query));
}

const createVehicle = async (req, res) => {
    httpResponse(res, await services.createVehicle(req.body));
}

const getVehicleById = async (req,res) => {
    const {vehicleId} = req.params
    httpResponse(res, await services.getVehicleById(vehicleId))
}

const updateVehicle = async (req,res) => {
    const {vehicleId} = req.params
    httpResponse(res, await services.updateVehicle(vehicleId,req.body))
}

const getVehicleByType = async (req,res) => {
    const {type} = req.params
    httpResponse(res, await services.getVehicleByType(type))
}

const deleteVehicle = async (req,res) => {
    const {vehicleId} = req.params
    httpResponse(res, await services.deleteVehicle(vehicleId))
}

module.exports = { getAllVehicle, createVehicle, getVehicleById, updateVehicle,getVehicleByType,deleteVehicle};