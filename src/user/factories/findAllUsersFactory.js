const { userControllerFactory } = require('./userControllerFactory')

const findAllUserFactory = async (request, response) => {
  const userController = userControllerFactory()
  return await userController.findAll(request, response)
}

module.exports = { findAllUserFactory }
