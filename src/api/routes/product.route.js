const express = require('express');
const app = express();
const productRoutes = express.Router();

let product = require('../models/Product');

productRoutes.route('/add').post((req, res) => {
    let product = new product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'Product': 'Product has been added successfully'});
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

productRoutes.route('/').get((req, res) => {
    let id = req.params.id;
    Product.findById(id, (err, product) => {
        res.json(product);
    });
});