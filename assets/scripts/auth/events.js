'use strict'

// gets user input data
const getFormFields = require('../../../lib/get-form-fields.js')

// makes ajax requests
const api = require('./api.js')

// what is displayed to the user
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailed)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailed)
}

const onChangePwBtn = function (event) {
  event.preventDefault()
  $('#change-pw').show()
  $('#changePwBtn').hide()
}

const onChangePw = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePw(formData)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailed)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailed)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pw').on('submit', onChangePw)
  $('#changePwBtn').on('click', onChangePwBtn)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
