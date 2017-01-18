import React, { PropTypes } from 'react'

/* Background image */
import BackgroundImage from '../containers/BackgroundImageLoader'

const TrainerBasicDetails = props => {
	return (
		<div className="trainer-basic-details">
			<div className="trainer-type">
				<BackgroundImage
					src={props.trainerType.img}
					className="trainer-type-img"
				/>
				<h3 className="trainer-type-name">
					{props.trainerType.name}
				</h3>
			</div>
			<div className="trainer-profile">
				<BackgroundImage
					src={props.profileImg}
					className="trainer-profile-img"
				/>
			</div>
			<div className="trainer-level">
				Lv {props.level}
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