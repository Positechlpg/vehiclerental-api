const services = require('./../services/authService')
const httpResponse = require('../helper/httpResponse')

const login = async (req, res) => {
    httpResponse(res, await services.login(req.body));
}

const createUser = async (req, res) => {
    httpResponse(res, await services.createUser(req.body));
}

const logout = async (req, res) => {
    const token = req.header("x-access-token");
    httpResponse(res, await services.logout(token));
}

module.exports = {login,createUser,logout}