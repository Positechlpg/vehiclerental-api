const vehicleModel = require('./../models/VehicleModel')
const ServiceResponse = require('./../helper/ServiceResponse')
const pagination = require('./../helper/pagination')

const getAllVehicle = async (queryString) => {
    try {
        const limit =  parseInt(queryString.per_page)
        const offset = (queryString.page * limit) - limit;
        const vehicle = await vehicleModel.getAllVehicle({...queryString,limit,offset});
        const total = (await vehicleModel.getTotalVehicle(queryString))[0].total ?? 0
        console.log(total)
        return pagination(vehicle,total,limit,offset, 200,"success pagination")
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
    try {
        const vehicle = (await vehicleModel.getVehicleById(vehicleId))[0];
        const newBody = {
            ...vehicle,
            ...body
        }
        await vehicleModel.updateVehicle(vehicleId, newBody);
        const data = newBody;
        return ServiceResponse(data, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getVehicleById = async (vehicleId) => {
    try {
        const vehicle = await vehicleModel.getVehicleById(vehicleId);
        return ServiceResponse(vehicle, 200)
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