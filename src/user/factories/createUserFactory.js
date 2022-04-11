const { userControllerFactory } = require('./userControllerFactory')

const createUserFactory = async (request, response) => {
  const userController = userControllerFactory()
  return await userController.create(request, response)
}

module.exports = { createUserFactory }
