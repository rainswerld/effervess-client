'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')

const store = require('../store.js')

const api = require('./api.js')

const ui = require('./ui.js')

const onShowRecipes = function (event) {
  event.preventDefault()
  api.showRecipes()
    .then(ui.showRecipesSuccess)
    .catch(ui.showRecipesFailed)
}

const onCreateNewClick = function (event) {
  event.preventDefault()
  $('#create-recipe').show()
  $('#auth-message').hide()
  $('#update-recipe').hide()
}

const onCreateRecipe = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createRecipe(formData)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeFailed)
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const recipeId = $(event.target).data('id')
  api.deleteRecipe(recipeId)
    .then(ui.deleteRecipeSuccess)
    .catch(ui.deleteRecipeFailed)
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateRecipe(formData)
    .then(ui.updateRecipeSuccess)
    .catch(ui.updateRecipeFailed)
}

const onShowSingleRecipe = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showSingleRecipe(formData)
    .then(ui.showSingleRecipeSuccess)
    .catch(ui.showSingleRecipeFailed)
}

const addHandlers = () => {
  // add the on click handler for onShowRecipes
  $('#show-recipes').on('click', onShowRecipes)
  $('#create-recipe').on('submit', onCreateRecipe)
  $('#createNewRecipe').on('click', onCreateNewClick)
  $('#content').on('click', '.btn-danger', onDeleteRecipe)
  $('#update-recipe').on('submit', onUpdateRecipe)
  $('#show-recipe').on('submit', onShowSingleRecipe)
}

module.exports = {
  addHandlers
}
