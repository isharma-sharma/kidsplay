const showRequestTemplate = require('../templates/request.handlebars')
const signUpSuccess = (data) => {
  console.log(data)
  $('#sign-up').hide()
}
const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  $('#sign-in').hide()
}

const signInFailure = (error) => {
  console.error(error)
}
const changePasswordSuccess = (data) => {
  console.log(data)
  $('#change-password').show()
}
const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = () => {
  console.log('signOutSuccess')
}
const signOutFailure = () => {
  console.log('signoutfaliue')
}
const getAllRequestSuccess = (data) => {
  console.log(data)
  debugger
  $('.request-table').empty()
  const showrequestHtml = showRequestTemplate({ requests: data.requests })
  console.log(showrequestHtml)
  $('#requestadd').html(showrequestHtml)
  $('#request-table').show()
}
const getAllRequestFailure = (error) => {
  console.log(error)
}
const DeleteRequestSuccess = () => {
  console.log('request delete')
}
const DeleteRequestFailure = (error) => {
  console.log(error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  getAllRequestSuccess,
  getAllRequestFailure,
  DeleteRequestSuccess,
  DeleteRequestFailure

}
