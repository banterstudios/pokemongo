import React, { Component, PropTypes } from 'react'

/* Components */
import LoginFormComponent from '../components/LoginForm'

class LoginForm extends Component {
  constructor (props) {
    super(props)

		/* Bind this */
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      emailValue: '',
      passwordValue: ''
    }
  }

  onEmailChange (e) {
    this.setState({
      emailValue: e.target.value
    })
  }

  onPasswordChange (e) {
    this.setState({
      passwordValue: e.target.value
    })
  }

  onSubmit () {
    this.props.onSubmit(this.state.emailValue, this.state.passwordValue)
  }

  render () {
    return (
      <LoginFormComponent
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        emailValue={this.state.emailValue}
        passwordValue={this.state.passwordValue}
        onSubmit={this.onSubmit}
			/>
    )
  }
}

LoginForm.propTypes = {
  onSubmit : PropTypes.func.isRequired
}

export default LoginForm
