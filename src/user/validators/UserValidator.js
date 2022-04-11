const joi = require('joi')

class UserValidator {
  createUserValidator (name, email, password) {
    const schemaValidate = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().required()
    })

    const { error } = schemaValidate.validate({ name, email, password })
    return error || false
  }
}

module.exports = { UserValidator }
