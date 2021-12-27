const services = require('./../services/vehicleServices')
const httpResponse = require('../helper/httpResponse')
const ServiceResponse = require('../helper/ServiceResponse')

const getAllVehicle = async (req, res) => {
    try {
        const queryString = req.query;
        console.log(req.route.path);
        const path = `http://${req.get('host') + req.baseUrl + req.route.path}?page`;
        queryString.path = path;
        httpResponse(res, await services.getAllVehicle(queryString));
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const createVehicle = async (req, res) => {
    try {
        const image = `${process.env.IMAGE_HOST}${req.file.filename}`;
        const body = req.body;
        body.photo = image;
        httpResponse(res, await services.createVehicle(body));
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getVehicleById = async (req, res) => {
    try {
        const { vehicleId } = req.params
        httpResponse(res, await services.getVehicleById(vehicleId))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const updateVehicle = async (req, res) => {
    try {
        const { vehicleId } = req.params
        const body = req.body;
        if (req.file) {
            const image = `${process.env.IMAGE_HOST}${req.file.filename}`;
            body.photo = image;
        }
        httpResponse(res, await services.updateVehicle(vehicleId, body))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getVehicleByType = async (req, res) => {
    try {
        const { type } = req.params
        httpResponse(res, await services.getVehicleByType(type))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const deleteVehicle = async (req, res) => {
    try {
        const { vehicleId } = req.params
        httpResponse(res, await services.deleteVehicle(vehicleId))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

module.exports = { getAllVehicle, createVehicle, getVehicleById, updateVehicle, getVehicleByType, deleteVehicle };