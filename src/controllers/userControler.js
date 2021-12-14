const services = require('./../services/userService')
const httpResponse = require('../helper/httpResponse')

const getAllCustommer = async (req, res) => {
    httpResponse(res, await services.getAllCustommer());
}

const getUser = async (req,res) => {
    const {userId} = req.params
    httpResponse(res, await services.getUser(userId))
}

const updateUser = async (req,res) => {
    const {userId} = req.params
    const image = `${process.env.IMAGE_HOST}${req.file.filename}`; 
    const body = req.body;
    body.image = image;
    httpResponse(res, await services.updateUser(userId, body))
}

const deleteUser = async (req,res) => {
    const {userId} = req.params
    httpResponse(res, await services.deleteUser(userId))
}

module.exports = { getAllCustommer,getUser,updateUser, deleteUser};