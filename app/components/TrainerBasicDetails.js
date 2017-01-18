import React, { PropTypes } from 'react'

/* Background image */
import BackgroundImage from '../containers/BackgroundImageLoader'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const TrainerBasicDetails = props => {
	return (
		<div className="trainer-basic-details">
			<div className="trainer-type">
				<ReactCSSTransitionGroup
		          transitionName='fade-in'
		          transitionAppear
		          transitionAppearTimeout={300}
		          transitionEnter={false}
		          transitionLeave={false} >
					<BackgroundImage
						src={props.trainerType.img}
						className="trainer-type-img"
					/>
					<h3 className="trainer-type-name">
						{props.trainerType.name}
					</h3>
				</ReactCSSTransitionGroup>
			</div>
			<div className="trainer-profile">
				<ReactCSSTransitionGroup
		          transitionName='fade-in'
		          transitionAppear
		          transitionAppearTimeout={300}
		          transitionEnter={false}
		          transitionLeave={false} >
					<BackgroundImage
						src={props.profileImg}
						className="trainer-profile-img"
					/>
				</ReactCSSTransitionGroup>
			</div>
			<div className="trainer-level">
				<ReactCSSTransitionGroup
		          transitionName='fade-in'
		          transitionAppear
		          transitionAppearTimeout={300}
		          transitionEnter={false}
		          transitionLeave={false} >
					<span>Lv {props.level}</span>
				</ReactCSSTransitionGroup>
			</div>
		</div>
	)
}

TrainerBasicDetails.propTypes = {
	trainerType : PropTypes.shape({
		img  : PropTypes.string,
		name : PropTypes.string
	}),
	name       : PropTypes.string,
	profileImg : PropTypes.string,
	level      : PropTypes.number
}

export default TrainerBasicDetails