const { User } = require('../entities/User')
const { userSchema } = require('../schemas/UserSchema')

class UserRepository {
  async create (name, email, password) {
    const user = new User(name, email, password)
    await userSchema.create(user)
  }

  async findAll (skip, limit) {
    console.log(limit)
    return await userSchema.findAll({
      attributes: ['id', 'name', 'email'],
      limit: limit,
      offset: skip
    })
  }
}

module.exports = { UserRepository }
