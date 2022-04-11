const { Sequelize } = require('sequelize')

const { DB_USER, DB_PWD, DB_NAME, DB_HOST, DB_PORT, DB_DIALECT } = process.env

const database = new Sequelize({
  username: DB_USER,
  password: DB_PWD,
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  define: {
    timestamps: false
  }
})

module.exports = { database }
