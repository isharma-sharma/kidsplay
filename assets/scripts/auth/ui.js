const showRequestTemplate = require('../templates/request.handlebars')
const showStudentTemplate = require('../templates/student.handlebars')
const showSingleStudentTemplate = require('../templates/singlestudent.handlebars')

// const resetForm = function resetForm ($form) {
//   $form.find('input:text, input:password, input:file, input:email, select, textarea').val('')
//   $form.find('input:radio, input:checkbox')
//   .removeAttr('checked').removeAttr('selected')
// }
const signUpSuccess = (data) => {
  // resetForm($('#sign-up'))
  console.log(data)
  $('#sign-up').hide()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('signUpSuccess now signin')
  // $('#updatemsg').text('signUpSuccess now signin')
}
const signUpFailure = (error) => {
  console.error(error)
  $('#sign-up').hide()
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Signup failed.User name already exist or password is not confirmed')
}

const signInSuccess = (data) => {
  console.log(data)
  $('#sign-in').hide()
  $('#changePassword-btn').show()
  $('#sign-out-btn').show()
  // $('#sign-in').empty()
  $('#cretstnd').show()
  $('#getstudnt').show()
  $('#getreq').show()
  $('#myBtn').hide()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('welcome user')
  $('#login-btn').hide()
}

const signInFailure = (error) => {
  // resetForm($('#sign-in'))
  $('#sign-in').show()
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('SignIn failed.new user sign-up first ,Or your password or role doesnot match')
}
const changePasswordSuccess = (data) => {
  console.log(data)
  // $('.form').reset()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('your password has been changed')
  $('#change-password').hide()
}
const changePasswordFailure = (error) => {
  // resetForm($('#change-password'))
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('your old password doesnot match')
}

const signOutSuccess = () => {
  console.log('signOutSuccess')
  $('#cretstnd').hide()
  $('#crtstudnt').hide()
  $('#getstudnt').hide()
  $('#getreq').hide()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('you signed out successfully')
  $('#sign-out-btn').hide()
  $('#login-btn').show()
}
const signOutFailure = () => {
  console.log('signoutfaliue')
}
const getAllRequestSuccess = (data) => {
  if (data.requests.length === 0) {
    console.log(data.requests)
    $('#head').hide()
  }
  // console.log(data.requests)
  // $('.request-table').empty()
  const showrequestHtml = showRequestTemplate({
    requests: data.requests
  })
  console.log(showrequestHtml)
  $('#requestadd').html(showrequestHtml)
  $('#request-table').show()
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
  if (data.students.length === 0) {
    console.log(data.students)
    $('#sthide').hide()
  }
  const showstudentHtml = showStudentTemplate({students: data.students})
  // console.log(showstudentHtml)
  $('#studentAdd').html(showstudentHtml)
  $('#student-table').show()
}

const onCreateStudentSuccess = (data) => {
  const showsinglestudentHtml = showSingleStudentTemplate({
    student: data.student
  })
  // $('#studentAdd').html(showstudentHtml)
  $('#studentAdd').append(showsinglestudentHtml)
}
const onUpdateStudentSuccess = (data) => {
  $('#saddress-' + data.student.id).text(data.student.address)
  $('#sdivision-' + data.student.id).text(data.student.division)
  $('#semail-' + data.student.id).text(data.student.email)
  console.log(data.student.id)
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
  deleteStudentSuccess,
  onCreateStudentSuccess
}
