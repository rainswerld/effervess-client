'use strict'

const config = require('../config.js')

const store = require('../store.js')

const showRecipes = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/recipes',
    method: 'GET'
  })
}

module.exports = {
  showRecipes
}
