import React, { PropTypes } from 'react';

const Trainer = props => {

	return (
		
		<img src={props.profileImgSrc} alt={props.profileImgAlt} />

	)

}

Trainer.propTypes = {
	profileImgAlt : PropTypes.string.isRequired,
	profileImgSrc : PropTypes.string.isRequired
}

export default Trainer