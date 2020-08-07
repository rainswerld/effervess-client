'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')

const store = require('../store.js')

const api = require('./api.js')

const ui = require('./ui.js')

const onShowRecipes = function (event) {
  event.preventDefault()
  api.showRecipes()
    .then(ui.showRecipesSuccess)
    .then(ui.failure)
}

const onCreateRecipe = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createRecipe(formData)
    .then(ui.createRecipeSuccess)
    .catch(ui.failure)
}

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const recipeId = $(event.target).data('id')
  api.deleteRecipe(recipeId)
    .then(ui.deleteRecipeSuccess)
    .catch(ui.failure)
}

// when a user clicks update recipe -> they are taken to a page that displays new input fields
// after successfully updating the recipes, they get taken back to the page that you can see the show recipes and the new recipe is displayed
// could use store.recipeId = recipeId (this would then be updated everytime someone clicks a new recipe to update)
const onUpdateRecipe = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateRecipe(formData)
    .then(ui.updateRecipeSuccess)
    .catch(console.error)
}

const addHandlers = () => {
  // add the on click handler for onShowRecipes
  $('#show-recipes').on('click', onShowRecipes)
  $('#create-recipe').on('submit', onCreateRecipe)
  $('#content').on('click', '.btn-danger', onDeleteRecipe)
  $('#update-recipe').on('submit', onUpdateRecipe)
}

module.exports = {
  addHandlers
}
