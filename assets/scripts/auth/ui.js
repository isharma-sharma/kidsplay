
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
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure

}
