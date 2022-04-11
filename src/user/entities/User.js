const { randomUUID } = require('crypto')

class User {
  constructor (name, email, password) {
    this.id = randomUUID()
    this.name = name
    this.email = email
    this.password = password
  }
}

module.exports = { User }
