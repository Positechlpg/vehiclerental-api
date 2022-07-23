const express = require("express")
const mainRouter = express.Router()
const product = require('./product');

mainRouter.get('/', function(req, res) {
    const total = parseInt(req.query.number1) + parseInt(req.query.number2);
    res.send(`${total}`);
})

mainRouter.use(product)

module.exports = mainRouter