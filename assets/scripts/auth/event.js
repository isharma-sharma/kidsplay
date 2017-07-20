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
const onGetAllRequest = function () {
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
   .then(ui.DeleteRequestSuccess(event))
   .catch(ui.DeleteRequestFailure)
}
const onCreateStudent = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createStudent(data)
    .then(ui.onCreateStudentSuccess)
    .catch(ui.onCreateStudentFailure)
}
const onGetAllStudent = function () {
  event.preventDefault()
  api.getAllStudent()
  .then(ui.getAllStudentSuccess)
  .catch(ui.getAllStudentFailure)
}
const onDeleteStudent = function (event) {
  event.preventDefault()
  console.log(event)
  const id = $(event.target).parent().parent().attr('data-id')
  console.log('this is what we need')
  console.log(id)
  api.deleteStudent(id)
   .then(ui.deleteStudentSuccess(event))
   .catch(ui.deleteStudentFailure)
}
const onUpdateStudent = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).attr('data-id')
  debugger
  console.log(id, data)
  api.updateStudentInfo(id, data)
  .then(ui.onUpdateStudentSuccess(event))
  .catch(ui.onUpdateStudentfailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-btn').on('click', onSignOut)
  $('#req').on('submit', onRequest)
  $('#getreq').on('click', onGetAllRequest)
  $('body').on('click', '.deleteRequest', onDeleteRequest)
  $('#crtstudnt').on('submit', onCreateStudent)
  $('#getstudnt').on('click', onGetAllStudent)
  $('body').on('submit', '.std', onUpdateStudent)
  $('body').on('click', '.deleteStudent', onDeleteStudent)
}

module.exports = {
  addHandlers
}
