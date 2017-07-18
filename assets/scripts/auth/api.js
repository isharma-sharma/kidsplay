'use strict'
const config = require('../config')
const store = require('../store.js')
// const ui = require('./ui')
const signUp = function (data) {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
    .then((response) => {
      store.userToken = response.user.token
      store.userId = response.user.id
      return store
      // store.user.id = response.user.id
    })
    .then(console.log)
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.userId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
    .then(console.log)
}
const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.userId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
    .then(console.log)
}

const createRequest = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/requests',
    method: 'POST',
    data
  })
    .then((response) => {
      store.request = response.request
      return store
    })
    .then(console.log)
}


module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createRequest
}
