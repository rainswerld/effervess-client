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

const createRecipe = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/recipes',
    method: 'POST',
    data: formData
  })
}

const deleteRecipe = function (recipeId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/recipes/' + recipeId,
    method: 'DELETE'
  })
}

const updateRecipe = function (formData) {
  const recipeId = formData.recipe._id
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/recipes/' + recipeId,
    method: 'PATCH',
    data: formData
  })
}

const showSingleRecipe = function (req) {
  const recipeId = req.recipe._id
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/recipes/' + recipeId,
    method: 'GET'
  })
}

module.exports = {
  showRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe,
  showSingleRecipe
}
