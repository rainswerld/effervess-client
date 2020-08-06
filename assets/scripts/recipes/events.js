'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const onShowRecipes = function (event) {
  console.log('i am here')
  event.preventDefault()
  api.showRecipes()
    .then(ui.showRecipesSuccess)
    .then(ui.showRecipesFailed)
}

const addHandlers = () => {
  // add the on click handler for onShowRecipes
  $('#show-recipes').on('click', onShowRecipes)
}

module.exports = {
  addHandlers
}
