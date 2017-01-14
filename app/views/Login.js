import React, { Component, PropTypes } from 'react'

/* Login form */
import LoginFormContainer from '../containers/LoginForm'

/* Redux connect */
import { connect } from 'react-redux'

/* Actions */
import { performLogin } from '../actions'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

/* Import spaced card component */
import SpacedCard from '../components/SpacedCard'

/* Login background */
import LoginBackground from '../assets/loginbackground.jpg'

/* Login pokemon image */
import LoginLogoImage from '../assets/logo.png'

class Login extends Component {

  constructor (props) {
    super(props)

      /* Bind this */
    this.onSubmit = this.onSubmit.bind(this)
    this.onRegister = this.onRegister.bind(this)
  }

  onSubmit (email, password) {
   		this.props.performLogin(email, password)
   		.then(() => {
   			this.context.router.push(`/`)
   		})
   		.catch(() => {
   			window.dev && console.log('failed to log in!')
   		})
  }

  onRegister () {
    window.dev && console.log('REGISTER')
  }

  render () {
   	return (
      <section className='login'>

        <ReactCSSTransitionGroup
          transitionName='fade-in'
          transitionAppear
          transitionAppearTimeout={300}
          transitionEnter={false}
          transitionLeave={false} >

          <div 
            className="login-background" 
            style={{backgroundImage:`url('${LoginBackground}')`}} />

        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName='shift-fade-up'
          transitionAppear
          transitionAppearTimeout={300}
          transitionEnter={false}
          transitionLeave={false} >

          <SpacedCard>

            <div 
            className="login-image" 
            style={{backgroundImage:`url('${LoginLogoImage}')`}} />

            <div className='register-text-container'>
              <h4 className='register-text' onClick={this.onRegister}>Register</h4>
            </div>

            <LoginFormContainer
              onSubmit={this.onSubmit}
            />

          </SpacedCard>

        </ReactCSSTransitionGroup>

      </section>
   	)
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  isLoggingIn: state.user.isLoggingIn
})

export default connect(mapStateToProps, { performLogin })(Login)
