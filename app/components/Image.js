import React, { PropTypes } from 'react';

const Image = props => {

	return (
		
		<img className={props.imgClasses || ''} src={props.imgSrc} alt={props.imgAlt} />

	)

}

Image.propTypes = {
	imgAlt       : PropTypes.string.isRequired,
	imgSrc       : PropTypes.string.isRequired,
	imgClasses   : PropTypes.string,
}

export default Image