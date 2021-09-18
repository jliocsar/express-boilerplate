const apiModule = require('./cli/generators/apiModule')
const apiValidationPipes = require('./cli/generators/apiValidationPipes')

module.exports = plop => {
  plop.setGenerator(...apiModule)
  plop.setGenerator(...apiValidationPipes)
}
