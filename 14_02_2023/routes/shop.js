const express = require('express');

const router = express.Router();
//homepage middleware
//localhost:3000/shop/
router.get('/',(req, res, next) => {
    res.send('<h1>Hello from Express</h1>');
});

module.exports = router;