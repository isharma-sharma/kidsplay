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
    .then(console.log(data))
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
    .then(console.log(store.request))
}

const getAllRequest = function () {
  return $.ajax({
    url: config.apiOrigin + '/requests',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}
const deleteRequest = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/requests/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
  .then((response) => {
    $("td[data-id='" + data + "']").remove()
  })
}
const createStudent = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/students',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
    // .then((response) => {
    //   store.student = response.student
    //   return store
    // })
    .then(console.log(data))
}
const getAllStudent = function () {
  return $.ajax({
    url: config.apiOrigin + '/students',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createRequest,
  getAllRequest,
  createStudent,
  deleteRequest,
  getAllStudent
}
