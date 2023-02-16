const path = require('path');
const express = require('express'); //import express
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//parsing request
app.use(bodyParser.urlencoded({extended: false}));

//localhost:3000/admin/add-products
app.use('/admin',adminRoutes);

//localhost:3000/shop/
app.use('/shop',shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views/','404.html'));
});

app.listen(3000);