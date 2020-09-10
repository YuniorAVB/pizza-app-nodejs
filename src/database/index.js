const mysql = require('mysql2')
const config = require('../config')

try {
  console.log(config)

  const connectionDb = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  })
  module.exports = connectionDb
  console.log('Connection DB')
} catch (error) {
  throw new Error(error)
}
