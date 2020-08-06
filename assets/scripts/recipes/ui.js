'use strict'

// need to require the handlebars file that will write out the recipes
// i.e. const showRecipesTemplate = require('path to handlebars recipe template')
const showRecipesTemplate = require('../templates/recipeListing.handlebars')
// need to require in handlebars for showing specific recipe

// need to require handlebars for after you've successfully created a new recipe
const store = require('../store.js')

const showRecipesSuccess = function (response) {
  console.log('this is the response in ui ', response)
  const showRecipesText = showRecipesTemplate({ recipes: response.recipes })
  $('#content').html(showRecipesText)
}

const showRecipesFailed = function (error) {
  console.log(error)
}

module.exports = {
  showRecipesSuccess,
  showRecipesFailed
}
