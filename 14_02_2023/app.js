const express = require('express'); //import express

const app = express();

//addProduct middleware
app.use('/addProduct',(req, res, next) => {
    res.send('<form action="/" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

//products middleware
app.use('/products',(req, res, next) => {
    res.send('<h1>Products Page</h1>');
});

//homepage middleware
app.use('/',(req, res, next) => {
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);