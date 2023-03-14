const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

const productArray = [];

//addProduct middleware localhost:3000/admin/add-products
router.get('/add-product',(req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views/', 'add-products.html'));
    res.render('add-product', {
        pageTitle: 'Add product page'
    });
});

//products middleware
//localhost:3000/admin/products
router.post('/add-product',(req, res, next) => {
    console.log(req.body.title.length);
    if(req.body.title.length > 0){
        productArray.push(req.body.title);
    }
    // res.sendFile(path.join(rootDir, 'views/', 'shop.html'));
    res.redirect('/shop/');
});

exports.routes = router;
exports.product = productArray;

