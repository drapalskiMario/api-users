class UserController {
  constructor ({ userValidator, userService } = {}) {
    this.userValidator = userValidator
    this.userService = userService
  }

  async create (request, response) {
    try {
      const { name, email, password } = request.body
      const errorInParams = this.userValidator.createUserValidator(name, email, password)
      if (errorInParams) {
        return response.status(204).json({ error: 'invalid params' })
      }
      await this.userService.create(name, email, password)
      return response.status(201).send()
    } catch (error) {
      console.error('error: ', error)
      return response.status(500).send()
    }
  }

  async findAll (request, response) {
    try {
      const { skip, limit } = request.query
      const users = await this.userService.findAll(skip, limit)
      return response.json({ users })
    } catch (error) {
      console.error('error: ', error)
      return response.status(500).send()
    }
  }
}

module.exports = { UserController }
