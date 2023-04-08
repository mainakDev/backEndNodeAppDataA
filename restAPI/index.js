const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

connectDB()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//localhost:3000/api/users
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
