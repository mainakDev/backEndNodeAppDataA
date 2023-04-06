const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

