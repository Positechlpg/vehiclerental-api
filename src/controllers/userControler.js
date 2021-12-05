const services = require('./../services/userService')
const httpResponse = require('../helper/httpResponse')

const getAllCustommer = async (req, res) => {
    httpResponse(res, await services.getAllCustommer());
}

const login = async (req, res) => {
    httpResponse(res, await services.login(req.body));
}

const getUser = async (req,res) => {
    const {userId} = req.params
    httpResponse(res, await services.getUser(userId))
}

const createUser = async (req, res) => {
    httpResponse(res, await services.createUser(req.body));
}

const updateUser = async (req,res) => {
    const {userId} = req.params
    httpResponse(res, await services.updateUser(userId,req.body))
}

const deleteUser = async (req,res) => {
    const {userId} = req.params
    httpResponse(res, await services.deleteUser(userId))
}

module.exports = { getAllCustommer,login,createUser,getUser,updateUser, deleteUser};