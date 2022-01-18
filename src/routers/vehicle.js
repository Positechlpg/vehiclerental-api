const express = require('express')
const vehicleRouter = express.Router()
const vehicleControler = require('./../controllers/vehicleControlers')
const {checkToken} = require('../middleware/authentication')
const {checkRoleAdmin} = require('../middleware/authorization')
const {fileUpload} = require('../middleware/upload')


vehicleRouter
        .get('/',  vehicleControler.getAllVehicle)
        .post('/createVehicle', checkToken, checkRoleAdmin, fileUpload, vehicleControler.createVehicle)
        .get('/:vehicleId',  vehicleControler.getVehicleById)
        .patch('/:vehicleId', checkToken, checkRoleAdmin, fileUpload, vehicleControler.updateVehicle)
        .get('/type/:type',  vehicleControler.getVehicleByType)
        .delete('/:vehicleId', checkToken, checkRoleAdmin, vehicleControler.deleteVehicle)


module.exports = vehicleRouter