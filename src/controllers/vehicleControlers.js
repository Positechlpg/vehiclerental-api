const services = require('./../services/vehicleServices')
const httpResponse = require('../helper/httpResponse')

const getAllVehicle = async (req, res) => {
    httpResponse(res, await services.getAllVehicle(req.query));
}

const createVehicle = async (req, res) => {
    const image = `${process.env.IMAGE_HOST}${req.file.filename}`; 
    const body = req.body;
    body.photo = image;
    httpResponse(res, await services.createVehicle(body));
}

const getVehicleById = async (req,res) => {
    const {vehicleId} = req.params
    httpResponse(res, await services.getVehicleById(vehicleId))
}

const updateVehicle = async (req,res) => {
    const {vehicleId} = req.params
    const body = req.body;
    if(req.file){
        const image = `${process.env.IMAGE_HOST}${req.file.filename}`; 
        body.photo = image;
    }
    httpResponse(res, await services.updateVehicle(vehicleId,body))
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