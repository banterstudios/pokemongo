import React, { PropTypes } from 'react';

const PokemonInfoToast = props => {
	
	return (
		<div 
			className="pokemon-info-toast"
			style={{backgroundColor : props.backgroundColor}}>
			{props.name}
		</div>
	)

}

PokemonInfoToast.defaultProps = {
	backgroundColor : '#cccccc'
}

export default PokemonInfoToast