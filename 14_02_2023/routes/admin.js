const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

//addProduct middleware localhost:3000/admin/add-products
router.get('/add-products',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views/', 'add-products.html'));
});

//products middleware
//localhost:3000/admin/products
router.post('/products',(req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views/', 'shop.html'));
});

module.exports = router;