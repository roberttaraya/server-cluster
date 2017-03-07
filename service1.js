module.exports = function() {
  const healthCheck = require('./config/service1/health-check')
  const people = require('./config/service1/people')
  const places = require('./config/service1/places')

  return {
    "health-check": healthCheck,
    people: people.data,
    places: places.data
  }
}
