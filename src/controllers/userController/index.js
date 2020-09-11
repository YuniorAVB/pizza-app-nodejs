const userModel = require('../../models/user')

const userController = {
  getUserById: function (req, res, next) {
    const id = req.params.id
    userModel.getById(id, function (error, fields) {
      if (error) {
        console.log(error)
      }

      res.status(200).json({ result: fields })
    })
  },
  getUserAll: function (req, res, next) {
    userModel.getAlls(function (error, fields) {
      if (error) {
        res.status(404).json({ result: fields })
      }

      res.status(200).json({ result: fields })
    })
  },
  createUser: function (req, res, next) {
    const { name, dni } = req.body
    userModel.create({ name, dni }, function (error, fields) {
      if (error) {
        res.status(404).json({ result: fields })
      }

      res.status(201).json({ result: fields })
    })
  },
  deleteUser: function (req, res, next) {
    const dni = req.params.dni
    userModel.create(dni, function (error, fields) {
      if (error) {
        res.status(404).json({ result: fields })
      }

      res.status(200).json({ result: fields })
    })
  },
}

module.exports = userController
