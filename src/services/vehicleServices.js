const vehicleModel = require('./../models/VehicleModel')
const ServiceResponse = require('./../helper/ServiceResponse')

const getAllVehicle = async (queryString) => {
    try {
        const user = await vehicleModel.getAllVehicle(queryString);
        return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const createVehicle = async (body) => {
    const { vehiclename, location, price, status, photo, stock, category } = body
    try {
        await vehicleModel.createVehicle(vehiclename, location, price, status, photo, stock, category)
        const data = { vehiclename, location, price, status, photo, stock, category }
        return ServiceResponse(data, 200, "create succes")
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)

    }
}

const updateVehicle = async (vehicleId, body) => {
    const { vehiclename, location, price, status, photo, stock, category } = body

    try {
        await vehicleModel.updateVehicle(vehicleId, body);
        const data = { vehiclename, location, price, status, photo, stock, category }
        return ServiceResponse(data, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getVehicleById = async (vehicleId) => {
    try {
        const user = await vehicleModel.getVehicleById(vehicleId);
        return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getVehicleByType = async (type) => {
    try {
        const user = await vehicleModel.getVehicleByType(type);
        return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const deleteVehicle = async (vehicleId) => {
    try {
        const user = await vehicleModel.deleteVehicle(vehicleId);
        return ServiceResponse(user, 200, 'delet succes')
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

module.exports = { getAllVehicle, createVehicle, getVehicleById, updateVehicle, getVehicleByType, deleteVehicle };