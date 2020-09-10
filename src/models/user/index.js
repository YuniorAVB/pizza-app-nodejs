const connectionDb = require('../../database')

module.exports = {
  getById: function (id, collback) {
    connectionDb.query('SELECT * FROM User where id LIKE ?', [id], collback)
  },
}
