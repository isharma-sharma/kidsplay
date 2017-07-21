const showRequestTemplate = require('../templates/request.handlebars')
const showStudentTemplate = require('../templates/student.handlebars')
const showSingleStudentTemplate = require('../templates/singlestudent.handlebars')

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
  $('#cretstnd').show()
  $('#getstudnt').show()
  $('#getreq').show()
  $('#myBtn').hide()
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
  $('#cretstnd').hide()
  $('#crtstudnt').hide()
  $('#getstudnt').hide()
  $('#getreq').hide()
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
