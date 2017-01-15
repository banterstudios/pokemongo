import React, { PropTypes } from 'react'

/* Components */

/* Import pokemon info toast component */
import PokemonInfoToastComponent from './PokemonInfoToast'

/* Import background image loader */
import BackgroundImage from '../containers/BackgroundImageLoader'

/* Utilities */

/* Import classnames utility helper */
import classNames from 'classnames'

const PokemonInfo = props => {
	
	
	let { name, color, image, selected, num, id, onClick } = props
	let _number     = `#${num}`,
		_classNames = classNames('pokemon-info', {'hidden' : !selected })

	return (
		<div className={_classNames} onClick={ () => { onClick(id) } }>
			
			<BackgroundImage
				className="poke-info-bg-image"
				src={image}
			/>

			<PokemonInfoToastComponent
				name={name}
				backgroundColor={color} />
			

			<PokemonInfoToastComponent
				name={_number} />

		</div>
	)
}

PokemonInfo.defaultProps = {
	onClick : function(){}
}

PokemonInfo.propTypes = {
	name     : PropTypes.string.isRequired,
	color    : PropTypes.string.isRequired,
	num      : PropTypes.string.isRequired,
	image    : PropTypes.string.isRequired,
	selected : PropTypes.bool.isRequired,
	id       : PropTypes.number.isRequired,
	onClick  : PropTypes.func
}

export default PokemonInfo