const services = require('./../services/userService')
const httpResponse = require('../helper/httpResponse')
const ServiceResponse = require('../helper/ServiceResponse')
const jwt = require("jsonwebtoken");

const getAllCustommer = async (req, res) => {
    try {
        httpResponse(res, await services.getAllCustommer());
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getUser = async (req, res) => {
    try {
        const token = req.header("x-access-token");
        const {id} = jwt.decode(token);
        httpResponse(res, await services.getUser(id))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const updateUser = async (req, res) => {
    try {
        const token = req.header("x-access-token");
        const {id} = jwt.decode(token);
        const image = `${process.env.IMAGE_HOST}${req.file.filename}`;
        const body = req.body;
        console.log(body)
        body.image = image;
        httpResponse(res, await services.updateUser(id, body))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params
        httpResponse(res, await services.deleteUser(userId))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

module.exports = { getAllCustommer, getUser, updateUser, deleteUser };