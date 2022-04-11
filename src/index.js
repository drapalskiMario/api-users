require('dotenv').config()
const express = require('express')
const { database } = require('./databaseConfig')
const { userRoutes } = require('./user/routes/userRoutes')

const { PORT } = process.env

const app = express()
app.use(express.json())
app.use('/api/v1', userRoutes)

;(async () => {
  try {
    app.listen(PORT)
    console.info(`server running on port ${PORT}`)
    await database.authenticate()
    console.info('Database Connection has been established successfully.')
  } catch (error) {
    console.error('error: ', error.message)
  }
}
)()
