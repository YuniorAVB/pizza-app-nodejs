const connectionDb = require('../../database')

module.exports = {
  getById: function (id, collback) {
    connectionDb.query('SELECT * FROM User where id LIKE ?', [id], collback)
  },
  getAlls: function (callback) {
    connectionDb.query('SELECT * FROM User', callback)
  },
  create: function ({ name, dni }, callback) {
    connectionDb.query(
      'INSERT INTO User (name,dni) values (?,?)',
      [name, dni],
      callback,
    )
  },
  delete: function (dni, callback) {
    connectionDb.query('DELETE FROM User WHERE dni like ?', [dni], callback)
  },
}
