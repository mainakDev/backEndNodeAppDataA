const express = require('express');

const adminRoutes = require('./admin')

const router = express.Router();
//homepage middleware
//localhost:3000/shop/
router.get('/',(req, res, next) => {
    const prods = adminRoutes.product;
    // console.log(adminRoutes.product);
    // res.send('<h1>Hello from Express</h1>');
    res.render('shop', {
        pageTilte: 'Shop page',
        products: prods
    });
});

module.exports = router;