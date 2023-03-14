const path = require('path');
const express = require('express'); //import express
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//parsing request
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

//localhost:3000/admin/add-products
app.use('/admin',adminRoutes.routes);

//localhost:3000/shop/
app.use('/shop',shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname,'views/','404.html'));
    res.render('404', {
        pageTitle: '404 not found'
    });
});

app.listen(3000);