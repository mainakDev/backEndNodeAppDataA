const User = require('../models/userModels')
const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler(async(req, res, next) => {
    const allUsers = await User.find()
    res.json(allUsers)
})

const setUser = asyncHandler(async(req, res, next) => {
    if(!req.body.username){
        res.status(400)
        throw new Error('Username required')
    } else if(!req.body.password){
        res.status(400)
        throw new Error('Password required')
    }
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json(newUser)
    // res.json({message: `New user ${req.body.username} created `})
})

const updateUser = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error(`User doesn't exist`)
    }
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updateUser)
})

const deleteUser = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error(`User doesn't exist`)
    }
    await user.deleteOne()
    res.json({message: `Sucesfully deleted user ${user.username}`})
})

module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser
}
