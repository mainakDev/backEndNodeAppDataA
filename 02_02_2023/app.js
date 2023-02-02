const express = require('express'); //import express

const app = express();
 
app.use((req, res) => {
    console.log('Inside Middleware function');
});

app.listen(3000);