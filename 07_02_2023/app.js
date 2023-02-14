const express = require('express'); //import express

const app = express();
 
//middleware1
app.use('/',(req, res, next) => {
    console.log('Inside Middleware function');
    next();
});

app.use('/addProduct',(req, res) => {
    res.send('<h1>Add Product Page</h1>');
});

app.use('/products',(req, res) => {
    res.send('<h1>Products Page</h1>');
});

app.use('/',(req, res) => {
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);