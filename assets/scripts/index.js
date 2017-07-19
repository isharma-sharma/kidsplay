'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/event.js')
$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
$(() => {
  authEvents.addHandlers()
})
$(() => {
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').hide()
})

$('#login-btn').click(function () {
  $('#sign-in').show()
})
$('#sign-up-btn').click(function () {
  $('#sign-up').show()
})
$('#changePassword-btn').click(function () {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
})
$(() => {
  $('#myBtn').click(function () {
    $('#myModal').modal()
  })
  $('body').on('click', '.editStudent', function () {
    $('#edit-student-modal').modal()
  })
})
