import React, { PropTypes } from 'react'

const Placeholder = props => {
	return (
		<div className="trainer-basic-details">
			<div className="trainer-type">
				<div className="trainer-type-img placeholder-img pulsate"/>
				<h3 className="trainer-type-name placeholder-text pulsate" />
			</div>
			<div className="trainer-profile">
				<div className="trainer-profile-img placeholder-img pulsate" />
			</div>
			<div className="trainer-level placeholder-text pulsate" />
		</div>
	)
}

export default Placeholder