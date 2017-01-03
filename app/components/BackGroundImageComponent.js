import React, { PropTypes } from 'react';

const BackGroundImage = props => {
	
	return (
		<div className={props.classNames}  
			 style={{
			 	backgroundImage : `url(${props.imageSrc})`
			 }}
		/>
	)

}

BackGroundImage.defaultProps = {
	classNames : 'background-image'
}

BackGroundImage.propTypes = {
	imageSrc   : PropTypes.string.isRequired,
	classNames : PropTypes.string 
}

export default BackGroundImage