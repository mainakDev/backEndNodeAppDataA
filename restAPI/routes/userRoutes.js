const express = require('express')
const {getUsers,setUser,updateUser,deleteUser} = require('../controllers/userController')

const router = express.Router()

router.route('/').get(getUsers).post(setUser)
router.route('/:id').delete(deleteUser).put(updateUser)

//localhost:3000/api/users/
// router.get('/', getUsers) //fetches all the users data
// router.post('/', setUser) //creates a new user
// router.put('/:id', updateUser) //update something
// router.delete('/:id', deleteUser) //delete

module.exports = router