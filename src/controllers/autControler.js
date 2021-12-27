const services = require('./../services/authService')
const httpResponse = require('../helper/httpResponse')
const ServiceResponse = require('../helper/ServiceResponse')


const login = async (req, res) => {
    try {
        httpResponse(res, await services.login(req.body));
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const createUser = async (req, res) => {
    try {
        httpResponse(res, await services.createUser(req.body));
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const logout = async (req, res) => {
    try {
        const token = req.header("x-access-token");
        console.log(token);
        httpResponse(res, await services.logout(token));
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

module.exports = { login, createUser, logout }