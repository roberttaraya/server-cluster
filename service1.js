module.exports = function() {
  const people = require('./config/service1/people')
  const places = require('./config/service1/places')

  return {
    people: people.data,
    places: places.data
  }
}
