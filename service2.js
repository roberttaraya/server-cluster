module.exports = function() {
  var colors = require('./config/service2/colors')
  var shapes = require('./config/service2/shapes')

  return {
    colors: colors.data,
    shapes: shapes.data
  }
}
