const express = require('express')
const userVehicle = express.Router()
const vehicleControler = require('./../controllers/vehicleControlers')


userVehicle
        .get('/', vehicleControler.getAllVehicle)
        .post('/createVehicle', vehicleControler.createVehicle)
        .get('/:vehicleId', vehicleControler.getVehicleById)
        .patch('/:vehicleId', vehicleControler.updateVehicle)
        .get('/type/:type', vehicleControler.getVehicleByType)
        .delete('/:vehicleId', vehicleControler.deleteVehicle)


module.exports = userVehicle