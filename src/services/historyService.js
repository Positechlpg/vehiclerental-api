const historyModel = require('./../models/HistoryModal')
const ServiceResponse = require('./../helper/ServiceResponse');


const getAllHistory = async (queryString) => {
    try {
        const user = await historyModel.getAllHistory(queryString);
        return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getHistoryByUserId = async (userId) => {
    try {
        const vehicle = await historyModel.getHistoryByUserId(userId);
        return ServiceResponse(vehicle, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const createHistory = async (body) => {
    const  {userId, vehicleId, quantityTotal, startDate, returnDate, bookingCode, paymentCode, status,total_price }=body

    try {
         const result =await historyModel.createHistory(userId, vehicleId, quantityTotal, startDate, returnDate, bookingCode, paymentCode, status,total_price);
        return ServiceResponse(result, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const updateHistory = async (historyId,body)=> {
    const { userId, vehicleId, quantityTotal, startDate, returnDate, bookingCode, paymentCode, status,total_price } = body
    try {
        await historyModel.updateHistory(historyId, body);
        const data = { userId, vehicleId, quantityTotal, startDate, returnDate, bookingCode, paymentCode, status,total_price }
        return ServiceResponse(data, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const deleteHistory = async (historyId) => {
    try {
        const user = await historyModel.deleteHistory(historyId);
        return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getPopulerVhicle = async (location) => {
    try {
        const user = await historyModel.getPopulerVhicle(location);
        return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

module.exports = {getAllHistory,createHistory, updateHistory,deleteHistory,getPopulerVhicle,getHistoryByUserId}