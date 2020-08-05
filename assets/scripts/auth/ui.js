'use strict'

const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#unauth-message').show()
  $('#unauth-message').text('Sign Up Successful! Now sign in')
  $('form').trigger('reset')
}

const signUpFailed = function (error) {
  console.log(error)
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#unauth-message').hide()
  $('#unauthenticated').hide()
  $('#authenticated').show()
  $('#auth-message').show()
  $('#auth-message').text('Sign In Successful!')
  $('form').trigger('reset')
}

const signInFailed = function (error) {
  console.log(error)
}

const changePwSuccess = function () {
  $('#auth-message').show()
  $('#auth-message').text('You changed your password!')
}

const changePwFailed = function (error) {
  console.log(error)
}

const signOutSuccess = function () {
  $('#auth-message').hide()
  $('#authenticated').hide()
  $('#unauthenticated').show()
  $('#unauth-message').show()
  $('#unauth-message').text('You signed out')
  $('form').trigger('reset')
}

const signOutFailed = function (error) {
  console.log(error)
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
