import React, { PropTypes } from 'react';

const BackGroundImage = props => {
	
	return (
		<div className="background-image"  
			 style={{
			 	backgroundImage : `url(${props.imageSrc})`
			 }}
		/>
	)

}

BackGroundImage.propTypes = {
	imageSrc : PropTypes.string.isRequired
}

export default BackGroundImage