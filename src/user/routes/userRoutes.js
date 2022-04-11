const { Router } = require('express')
const { createUserFactory } = require('../factories/createUserFactory')
const { findAllUserFactory } = require('../factories/findAllUsersFactory')

const userRoutes = Router()

userRoutes.post('/users', createUserFactory)
userRoutes.get('/users', findAllUserFactory)

module.exports = { userRoutes }
