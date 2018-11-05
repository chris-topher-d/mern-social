const Validator = require('validator');

module.exports = validateLogin = data => {
  let errors = {};

  // Validate email
  if (!Validator.isEmail(data.email)) errors.email = 'Email is invalid';
  if (Validator.isEmpty(data.email)) errors.email = 'Email is required';

  // Validate password
  if (Validator.isEmpty(data.password)) errors.password = 'Password is required';

  return {
    errors,
    isValid: Object.keys(errors) === 0
  }
}
