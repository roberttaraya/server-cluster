module.exports = function() {
  var people = require('./config/service1/people')
  var places = require('./config/service1/places')

  return {
    people: people.data,
    places: places.data
  }
}
