import React, { PropTypes } from 'react';

const Image = props => {

	return (
		
		<img src={props.imgSrc} alt={props.imgAlt} />

	)

}

Image.propTypes = {
	imgAlt : PropTypes.string.isRequired,
	imgSrc : PropTypes.string.isRequired
}

export default Image