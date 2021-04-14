const authResolver = require('./auth')
const eventsResolver = require('./events')
const bookingResolver = require('./booking')
const adminResolver = require('./admin')

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver,
  ...adminResolver,
}

module.exports = rootResolver
