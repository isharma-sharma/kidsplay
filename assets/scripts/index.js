'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/event.js')
const editStudentTemplate = require('./templates/editStudents.handlebars')
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
  $('#cretstnd').hide()
  $('#crtstudnt').hide()
  $('#getstudnt').hide()
  $('#getreq').hide()
  $('#success').hide()
  $('#error').hide()
  $('#changePassword-btn').hide()
  $('#sign-out-btn').hide()
})

$('#login-btn').click(function () {
  $('#sign-in').show()
  $('#sign-up').hide()
  // $('#change-password').hide()
})
$('#sign-up-btn').click(function () {
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-in').hide()
})
$('#changePassword-btn').click(function () {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
})
$('#cretstnd').click(function () {
  $('#crtstudnt').show()
})
$(() => {
  $('#myBtn').click(function () {
    $('#myModal').modal()
  })
  $('body').on('click', '.editStudent', function (event) {
    // get the ID from the DOM
    const id = $(event.target).parent().attr('data-id')
    console.log(id)
    const editStudentHtml = editStudentTemplate({ id: id })

    $('#edit-student-modal .modal-body').html(editStudentHtml)
    // generate the handlebars templates
    // pass the id to the handlebars template
    // add handlebars template to the modal
    $('#edit-student-modal').modal()
  })
})
