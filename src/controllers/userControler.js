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
        const {id} = req.userInfo
        const body = req.body;
        if (req.file) {
            const image = `${process.env.IMAGE_HOST}${req.file.filename}`;
            body.image = encodeURI(image);
        }
        return httpResponse(res, await services.updateUser(id, body))
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

const editPassword = async (req, res) => {
    try {
        const userId = req.userInfo.id
        const body = req.body;
        console.log(req.params);
        httpResponse(res, await services.editPassword(userId,body))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const updateTokenFcm = async (req, res) => {
    try {
        const {tokenFcm,email} = req.body;
        console.log(req.params);
        httpResponse(res, await services.updateTokenFcm(tokenFcm,email))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const forgotPassword = async (req, res) => {
    try {
        const {email} = req.body;
        httpResponse(res, await services.forgotPassword(email))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}
const resetPassword = async (req, res) => {
    try {
        const {pin,password}=req.body
        httpResponse(res, await services.resetPassword(pin,password))
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}


module.exports = { getAllCustommer, getUser, updateUser, deleteUser,editPassword,forgotPassword,resetPassword,updateTokenFcm };