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
}

module.exports = userController
