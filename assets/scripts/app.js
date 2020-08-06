'use strict'

// need to require in the authentication events
const authEvents = require('./auth/events.js')

const clientEvents = require('./recipes/events.js')

$(() => {
  authEvents.addHandlers()
  clientEvents.addHandlers()
})
