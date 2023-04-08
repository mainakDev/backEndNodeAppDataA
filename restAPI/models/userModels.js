const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Please enter an username']
    },
    password: {
        type: String,
        require: [true, 'Please enter an password']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('users', userSchema)