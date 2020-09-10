const userRoutes = require('express').Router()
const userController = require('../../controllers/userController')

userRoutes.get('/user/:id',userController.getUserById)


module.exports = userRoutes