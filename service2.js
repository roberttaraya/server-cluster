module.exports = function() {
  const colors = require('./config/service2/colors')
  const shapes = require('./config/service2/shapes')

  return {
    colors: colors.data,
    shapes: shapes.data
  }
}
