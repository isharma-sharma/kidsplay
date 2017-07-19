const getFormFields = require('../../../lib/get-form-fields')
// const removebton = require('../templates/car-listing.handlebars')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
   .catch(ui.signOutFailure)
}
const onRequest = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createRequest(data)
    .then(ui.onRequestSuccess)
    .catch(ui.onRequestFailure)
}
const onGetAllRequest = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.getAllRequest()
    .then(ui.getAllRequestSuccess)
    .catch(ui.getAllRequestFailure)
}
const onDeleteRequest = function (event) {
  event.preventDefault()
  console.log(event)
  const id = $(event.target).parent().parent().attr('data-id')
  console.log('this is what we need')
  console.log(id)
  api.deleteRequest(id)

   .then(ui.DeleteRequestSuccess)
   .catch(ui.DeleteRequestFailure)
}
const onStudent = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createStudent(data)
    .then(ui.onStudentSuccess)
    .catch(ui.onStudentFailure)
}
const onGetAllStudent = function () {
  event.preventDefault()
  api.getAllStudent()
  .then(ui.getAllStudentSuccess)
  .catch(ui.getAllStudentFailure)
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-btn').on('click', onSignOut)
  $('#req').on('submit', onRequest)
  $('#getreq').on('click', onGetAllRequest)
  $('#crtstudnt').on('submit', onStudent)
  $('#getstudnt').on('click', onGetAllStudent)
}

module.exports = {
  addHandlers
}
