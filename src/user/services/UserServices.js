const { hashSync } = require('bcrypt')

class UserService {
  constructor ({ userRepository } = {}) {
    this.userRepository = userRepository
  }

  async create (name, email, password) {
    const passwordHash = hashSync(password, 12)
    await this.userRepository.create(name, email, passwordHash)
  }

  async findAll (skip, limit) {
    return await this.userRepository.findAll(skip, limit)
  }
}

module.exports = { UserService }
