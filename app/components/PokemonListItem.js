import React, { PropTypes } from 'react';

const PokemonListItem = props => {
	return (
		<li className="pokemon-list-item" key={props.id} onClick={e => props.onClick(e,props.id)}>
			<span className="poke-num">#{props.num}</span>
			<span className="poke-name">{props.name}</span>
			<div className={props.isActive ? 'pokeball active' : 'pokeball'}></div>
		</li>
	)
}

PokemonListItem.propTypes = {
	onClick  : PropTypes.func.isRequired,
	isActive : PropTypes.bool.isRequired,
	id       : PropTypes.number.isRequired,
	num      : PropTypes.string.isRequired,
	name     : PropTypes.string.isRequired
}

export default PokemonListItem