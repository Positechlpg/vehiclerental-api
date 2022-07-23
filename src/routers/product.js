const express = require('express');
const route = express.Router();
const controller = require('../controller/productController')

route.get('/product', controller.get)
route.post('/product', controller.post)




module.exports = route;