const ProductModel = require('../models/productModel');

const post = async function(req, res) {
    try {
        
        const body = req.body;

        const input = {
            product_name: body.product_name,
            stock: body.stock,
            price: body.price,
            image: body.image,
        };
        const data = await ProductModel.create(input);
        
        return  res.send(data)
    } catch (error) {
        console.log(error);
    }

};

const get = async function(req, res) {
    try {

        const data = await ProductModel.findAll();
        return res.send(data)
    } catch (error) {
        console.log(error);
    }
};

const put = async function(req, res) {
    try {
        
        const id = req.params.id;
        const body = req.body;

        const input = {
            product_name: body.product_name,
            stock: body.stock,
            price: body.price,
            image: body.image,
        };

        await ProductModel.update(input, {
            where: {
                id: id,
            }
        });

        const data = await ProductModel.findOne({
            where: {
                id: id
            }
        });
        
        return  res.send(data)
    } catch (error) {
        console.log(error);
    }

};

const destroy = async function(req, res) {
    try {
        const id = req.params.id;

        await ProductModel.destroy({
            where: {
                id: id,
            }
        })
        return res.send({
            message: 'delete success'
        })
    } catch (error) {
        console.log(error);
    }
};


const getById = async function(req, res) {
    try {
        const id = req.params.id;

        const data = await ProductModel.findOne({
            where: {
                id: id,
            }
        });

        if (data === null) {
            return res.send({
                message: 'Product Not Found'
            })
        } else {
            return res.send(data)
        }
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    get,
    post,
    put,
    destroy,
    getById
};
