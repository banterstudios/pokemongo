import React, { PropTypes, Component } from 'react'

import RegisterFormComponent from '../components/RegisterForm'

class RegisterForm extends Component {
	constructor(props){
		super(props)

		this.onEmailChange    = this.onEmailChange.bind(this)
		this.onPasswordChange = this.onPasswordChange.bind(this)
		this.onUserNameChange = this.onUserNameChange.bind(this)
		this.onSubmit         = this.onSubmit.bind(this)
		this.onPassVisible    = this.onPassVisible.bind(this)
		
		this.state = {
			emailValue        : '',
			passwordValue     : '',
			userNameValue     : '',
			isPasswordVisible : false,
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

	onUserNameChange (e) {
		this.setState({
			userNameValue: e.target.value
		})
	}

	onPassVisible(){
		this.setState((prevState) => {
			isPasswordVisible : !prevState.isPasswordVisible
		})
	}

	onSubmit () {
		let { userNameValue, emailValue, passwordValue} = this.state
    	this.props.onSubmit(userNameValue, emailValue, passwordValue)
  	}

	render(){
		return (
			<RegisterFormComponent
				onEmailChange={this.onEmailChange}
				onUserNameChange={this.onUserNameChange}
				onPasswordChange={this.onPasswordChange}
				userNameValue={this.state.userNameValue}
				emailValue={this.state.emailValue}
				passwordValue={this.state.passwordValue}
				onSubmit={this.onSubmit}
				passwordVisible={this.state.isPasswordVisible}
				onPassVisible={this.onPassVisible}
			/>
		)
	}
}

RegisterForm.propTypes = {
  onSubmit : PropTypes.func.isRequired
}

export default RegisterForm