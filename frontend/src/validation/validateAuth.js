export default function validateAuth(values) {
  let errors = {}
  if (!values.email) {
    errors.email = 'Email required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 12) {
    errors.password = 'Password needs to be 12 characters or more'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Password is required'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match'
  }
  return errors
}
