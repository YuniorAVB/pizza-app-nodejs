const userRoutes = require('express').Router()
const userController = require('../../controllers/userController')

userRoutes.get('/user/:id',userController.getUserById)
userRoutes.get('/user',userController.getUserAll)
userRoutes.post('/user',userController.createUser)
userRoutes.delete('/user',userController.deleteUser)


module.exports = userRoutes