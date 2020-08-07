'use strict'

// need to require the handlebars file that will write out the recipes
// i.e. const showRecipesTemplate = require('path to handlebars recipe template')
const showRecipesTemplate = require('../templates/recipeListing.handlebars')
const createRecipeTemplate = require('../templates/showRecipe.handlebars')
// need to require in handlebars for showing specific recipe

// need to require handlebars for after you've successfully created a new recipe
const store = require('../store.js')

const showRecipesSuccess = function (response) {
  $('#content').show()
  $('#deleteSuccess').hide()
  const showRecipesText = showRecipesTemplate({ recipes: response.recipes })
  $('#content').html(showRecipesText)
}

const createRecipeSuccess = function (response) {
  $('#create-recipe').trigger('reset')
  $('#content').show()
  const showRecipesText = createRecipeTemplate({ recipe: response.recipe })
  $('#content').html(showRecipesText)
}

const deleteRecipeSuccess = function () {
  $('#content').hide()
  $('#deleteSuccess').show()
  $('#deleteSuccess').text('Recipe deleted')
}

const updateRecipeSuccess = function (response) {
  $('#content').text('Recipe Successfully updated!')
  $('#update-recipe').trigger('reset')
}

const failure = function (error) {
  console.log(error)
}

module.exports = {
  showRecipesSuccess,
  createRecipeSuccess,
  deleteRecipeSuccess,
  updateRecipeSuccess,
  failure
}
