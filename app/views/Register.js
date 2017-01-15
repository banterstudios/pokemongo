import React, { Component, PropTypes } from 'react'

/* Register Form */
import RegisterFormContainer from '../containers/RegisterForm'

/* Backround image loader */
import BackgroundImage from '../containers/BackgroundImageLoader'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

/* Import spaced card component */
import SpacedCard from '../components/SpacedCard'

/* Login background */
import RegisterBackground from '../assets/loginbackground.jpg'

/* Login pokemon image */
import RegisterLogoImage from '../assets/logo.png'

/* Nav bar */
import NavbarContainer from '../containers/Navbar'

class Register extends Component {
	constructor(props){
		super(props)
	
		this.onSubmit = this.onSubmit.bind(this)
		this.onBack   = this.onBack.bind(this)
	}

	onSubmit(){
		//submit the users details.
	}

	onBack(){
		this.context.router.push('/login')
	}

	render(){
		return (
			<section className='register'>

				<NavbarContainer
					back
					transparent
					onBack={this.onBack} />

		        <ReactCSSTransitionGroup
		          transitionName='fade-in'
		          transitionAppear
		          transitionAppearTimeout={300}
		          transitionEnter={false}
		          transitionLeave={false} >

		          <BackgroundImage
		            src={RegisterBackground}
		            className="register-background"
		          />

		        </ReactCSSTransitionGroup>

		        <ReactCSSTransitionGroup
		          transitionName='shift-fade-up'
		          transitionAppear
		          transitionAppearTimeout={300}
		          transitionEnter={false}
		          transitionLeave={false} >

		          <SpacedCard>
		  
		            <BackgroundImage
		              src={RegisterLogoImage}
		              className="register-image"
		            />

		            <RegisterFormContainer
		              onSubmit={this.onSubmit}
		            />

		          </SpacedCard>

		        </ReactCSSTransitionGroup>

		    </section>
		)
	}
}

Register.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Register