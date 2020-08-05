'use strict'

// need to require in the authentication events
const authEvents = require('./auth/events.js')

$(() => {
  authEvents.addHandlers()
  // create addHandlers function in events - it should deal with all auth actions
})
