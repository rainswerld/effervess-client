'use strict'

const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#unauth-message').show()
  $('#unauth-message').text('Sign Up Successful! Now sign in')
  $('form').trigger('reset')
}

const signUpFailed = function () {
  $('#unauth-message').text('Failed to Sign Up')
}

const signInSuccess = function (response) {
  $('#create-recipe').hide()
  $('#update-recipe').hide()
  $('#content').hide()
  $('#change-pw').hide()
  store.user = response.user
  $('#unauth-message').hide()
  $('#unauthenticated').hide()
  $('#authenticated').show()
  $('#auth-message').show()
  $('#auth-message').text('✔︎Sign In Successful! ✔︎')
  $('form').trigger('reset')
}

const signInFailed = function () {
  $('#unauth-message').text('Failed to Sign In')
}

const changePwSuccess = function () {
  $('#change-pw').hide()
  $('#changePwBtn').show()
  $('#auth-message').show()
  $('#auth-message').text('You changed your password!')
  $('form').trigger('reset')
}

const changePwFailed = function () {
  $('#auth-message').text('Failed to changed your password!')
}

const signOutSuccess = function () {
  $('#auth-message').hide()
  $('#authenticated').hide()
  $('#unauthenticated').show()
  $('#unauth-message').show()
  $('#unauth-message').text('You signed out')
  $('form').trigger('reset')
}

const signOutFailed = function () {
  $('#auth-message').text('Failed to sign out!')
}

module.exports = {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
  changePwSuccess,
  changePwFailed,
  signOutSuccess,
  signOutFailed
}
