const getUsers = (req, res, next) => {
    res.send('GET route')
}

const setUser = (req, res, next) => {
    res.send('POST route')
}

const updateUser = (req, res, next) => {
    res.send('PUT route')
}

const deleteUser = (req, res, next) => {
    res.send('DELETE route')
}

module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser
}
