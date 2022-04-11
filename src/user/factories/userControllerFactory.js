const { UserRepository } = require('../repositories/UserRepository')
const { UserValidator } = require('../validators/UserValidator')
const { UserService } = require('../services/UserServices')
const { UserController } = require('../controllers/UserController')

const userControllerFactory = () => {
  const userRepository = new UserRepository()
  const userValidator = new UserValidator()
  const userService = new UserService({ userRepository })
  return new UserController({ userValidator, userService })
}

module.exports = { userControllerFactory }
