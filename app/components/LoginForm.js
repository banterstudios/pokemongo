import React, { PropTypes } from 'react';

/* Error Message */
import FormErrorMessage from './FormErrorMessage';

/* Login background */
import LoginBackground from '../assets/loginbackground.jpg';

/* Login pokemon image */
import LoginLogoImage from '../assets/logo.png';

/* Components */
import BackgroundImageComponent from './BackGroundImageComponent';
import ErrorMessageComponent from './FormErrorMessage';

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const LoginForm = props => {
	return (
		
		<div className="login-form">
			
			<ReactCSSTransitionGroup
				transitionName="fade-in"
				transitionAppear={true}
				transitionAppearTimeout={300}
				transitionEnter={false}
				transitionLeave={false} >
				
				<BackgroundImageComponent 
					imageSrc={LoginBackground}
					classNames="login-background"
				/>

			</ReactCSSTransitionGroup>

			<ReactCSSTransitionGroup
				transitionName="shift-fade-up"
				transitionAppear={true}
				transitionAppearTimeout={300}
				transitionEnter={false}
				transitionLeave={false} >
				
				<div className="spaced-card-wrapper" key="spaced-card-wrapper-login-form" >
		            
		             <div className="fill"></div>
		             
		             <div className="spaced-card-container">
						
						<BackgroundImageComponent
							imageSrc={LoginLogoImage}
							classNames="login-image"
						/>

						<div className="form-field-wrapper">
							<input
								className="form-field-input"
								type="email"
								placeholder="Email"
								tabIndex='1'
								onChange={props.onChange}
							/>
						</div>

						<div className="form-field-wrapper">
							<input
								className="form-field-input"
								type="password"
								tabIndex="2"
								placeholder="Password"
								onChange={props.onChange}
							/>
						</div>

						<div className="form-field-wrapper">
							<button className="form-field-submit-button" onClick={props.onSubmit}>
								log in
							</button>
						</div>

		            </div>
	            </div>

	        </ReactCSSTransitionGroup>

		</div>
	)
}

LoginForm.propTypes = {
	onChange : PropTypes.func,
	onSubmit : PropTypes.func,
	error    : PropTypes.string
}

export default LoginForm
