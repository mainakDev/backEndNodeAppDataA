const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productController = require('../controller/products');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
