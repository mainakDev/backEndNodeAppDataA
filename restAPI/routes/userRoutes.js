const express = require('express')
const {getUsers,setUser,updateUser,deleteUser} = require('../controllers/userController')

const router = express.Router()

router.route('/').get(getUsers).post(setUser)
router.route('/:id').delete(deleteUser).put(updateUser)

// router.get('/', getUsers)
// router.post('/', setUser)
// router.put('/:id', updateUser)
// router.delete('/:id', deleteUser)

module.exports = router