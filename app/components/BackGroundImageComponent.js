import React, { PropTypes } from 'react';

const BackGroundImage = props => {
	
	let _classNames = props.classNames.indexOf('background-image') >= 0 ? props.classNames : `background-image ${props.classNames}`

	return (
		<div className={_classNames}  
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