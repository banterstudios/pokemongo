import React, { PropTypes } from 'react'

/* Error Message */
import FormErrorMessage from './FormErrorMessage'

const RegisterForm = props => {
  return (

    <div className='register-form'>

      <div className='form-field-wrapper'>
        <input
          className='form-field-input'
          type='text'
          placeholder='Username'
          tabIndex='1'
          value={props.userNameValue}
          onChange={props.onUserNameChange}
        />
      </div>

      <div className='form-field-wrapper'>
        <input
          className='form-field-input'
          type='email'
          placeholder='Email'
          tabIndex='2'
          value={props.emailValue}
          onChange={props.onEmailChange}
				/>
      </div>

      <div className='form-field-wrapper'>
        <input
          className='form-field-input form-with-icon-right'
          type={props.passwordVisible ? 'text' : 'password'}
          tabIndex='3'
          value={props.passwordValue}
          placeholder='Password'
          onChange={props.onPasswordChange}
				/>
        <i className="form-password-visible-icon" onClick={props.onPassVisible} />
      </div>

      <div className='form-field-wrapper'>
        <button className='form-field-submit-button' onClick={props.onSubmit}>
					Register
				</button>
      </div>

    </div>

  )
}

RegisterForm.propTypes = {
  onUserNameChange : PropTypes.func.isRequired,
  onEmailChange    : PropTypes.func.isRequired,
  onPasswordChange : PropTypes.func.isRequired,
  onSubmit         : PropTypes.func.isRequired,
  error            : PropTypes.string,
  userNameValue    : PropTypes.string.isRequired,
  emailValue       : PropTypes.string.isRequired,
  passwordValue    : PropTypes.string.isRequired,
  passwordVisible  : PropTypes.bool.isRequired,
  onPassVisible    : PropTypes.func.isRequired
}

export default RegisterForm
