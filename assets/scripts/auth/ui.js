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
  $('.form-control').val('')
  console.log(data)
  $('#sign-up').hide()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('signUpSuccess now signin')
  // $('#updatemsg').text('signUpSuccess now signin')
}
const signUpFailure = (error) => {
  console.error(error)
  $('.form-control').val('')
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
  $('.form-control').val('')
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
  $('.form-control').val('')
  $('#sign-in').show()
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('SignIn failed.new user sign-up first ,Or your password or role doesnot match')
}
const changePasswordSuccess = (data) => {
  console.log(data)
  $('.form-control').val('')
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('your password has been changed')
  $('#change-password').hide()
}
const changePasswordFailure = (error) => {
  $('.form-control').val('')
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('your old password doesnot match')
}

const signOutSuccess = () => {
  console.log('signOutSuccess')
  $('.form-control').val('')
  $('#cretstnd').hide()
  $('#crtstudnt').hide()
  $('#getstudnt').hide()
  $('#getreq').hide()
  $('#myBtn').show()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('you signed out successfully')
  $('#sign-out-btn').hide()
  $('#login-btn').show()
  $('#student-table').hide()
}
const signOutFailure = () => {
  console.log('signoutfaliue')
  $('.form-control').val('')
}
const getAllRequestSuccess = (data) => {
  if (data.requests.length === 0) {
    $('.head').hide()
    $('#success').show()
    $('#succmsg').text('no request on the list')
  } else {
    const showrequestHtml = showRequestTemplate({
      requests: data.requests
    })
    $('#requestadd').html(showrequestHtml)
    $('#request-table').show()
  }
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
    $('.head1').hide()
    $('#success').show()
    $('#succmsg').text('no student on the list')
  } else {
    $('#student-table').show()
    $('.head1').show()
    const showstudentHtml = showStudentTemplate({
      students: data.students
    })
    // console.log(showstudentHtml)
    $('#studentAdd').html(showstudentHtml)
  }
}
const onCreateStudentSuccess = (data) => {
  $('#student-table').show()
  $('.head1').show()
  $('.form-control').val('')
  const showsinglestudentHtml = showSingleStudentTemplate({
    student: data.student
  })
  // $('#studentAdd').html(showstudentHtml)
  $('#studentAdd').append(showsinglestudentHtml)
}
const onUpdateStudentSuccess = (data) => {
  $('.saddress-' + data.student.id).text(data.student.address)
  $('.sdivision-' + data.student.id).text(data.student.division)
  $('.semail-' + data.student.id).text(data.student.email)
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
