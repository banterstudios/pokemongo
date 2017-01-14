import React, { PropTypes } from 'react'

/* Error Message */
import FormErrorMessage from './FormErrorMessage'

const LoginForm = props => {
  return (

    <div className='login-form'>

      <div className='form-field-wrapper'>
        <input
          className='form-field-input'
          type='email'
          placeholder='Email'
          tabIndex='1'
          value={props.emailValue}
          onChange={props.onEmailChange}
				/>
      </div>

      <div className='form-field-wrapper'>
        <input
          className='form-field-input'
          type='password'
          tabIndex='2'
          value={props.passwordValue}
          placeholder='Password'
          onChange={props.onPasswordChange}
				/>
      </div>

      <div className='form-field-wrapper'>
        <button className='form-field-submit-button' onClick={props.onSubmit}>
					log in
				</button>
      </div>

    </div>

  )
}

LoginForm.propTypes = {
  onEmailChange    : PropTypes.func.isRequired,
  onPasswordChange : PropTypes.func.isRequired,
  onSubmit         : PropTypes.func.isRequired,
  error            : PropTypes.string,
  emailValue       : PropTypes.string.isRequired,
  passwordValue    : PropTypes.string.isRequired
}

export default LoginForm
