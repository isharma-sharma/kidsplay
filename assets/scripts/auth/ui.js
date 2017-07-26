const showRequestTemplate = require('../templates/request.handlebars')
const showStudentTemplate = require('../templates/student.handlebars')
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
  const showrequestHtml = showRequestTemplate({ requests: data.requests })
  console.log(showrequestHtml)
  $('#requestadd').append(showrequestHtml)
}
const getAllRequestFailure = (error) => {
  console.log(error)
}
const DeleteRequestSuccess = (event) => {
  console.log(event)
  console.log('this is event target:', $(event.target))
  $(event.target).parent().parent().remove()
}
const DeleteRequestFailure = (error) => {
  console.log(error)
}
const getAllStudentSuccess = (data) => {
  const showstudentHtml = showStudentTemplate({students: data.students})
  console.log(showstudentHtml)
  $('#studentAdd').html(showstudentHtml)
}

const onUpdateStudentSuccess = (data) => {
  console.log(data)
}

const onUpdateStudentFailure = (error) => {
  console.error(error)
}
const deleteStudentSuccess = (event) => {
  console.log(event)
  console.log('this is event target:', $(event.target))
  $(event.target).parent().parent().remove()
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
  DeleteRequestFailure,
  getAllStudentSuccess,
  onUpdateStudentSuccess,
  onUpdateStudentFailure,
  deleteStudentSuccess
}
