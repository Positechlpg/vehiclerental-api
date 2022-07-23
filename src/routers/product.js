const express = require('express');
const route = express.Router();
const controller = require('../controller/productController')

route.get('/product', controller.get)
route.post('/product', controller.post)
route.put('/product/:id', controller.put)
route.delete('/product/:id', controller.destroy)
route.get('/product/:id', controller.getById)




module.exports = route;