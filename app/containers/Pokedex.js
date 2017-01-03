import React, { PropTypes, Component } from 'react';

/* List container */
import ListContainer from './List';

/* Import pokedex data */
import pokedexData from '../data/pokedexdata';

/* Create markup for each pokemon */
const createPokemonListItem = (pokemon) => {
	return (
		pokemon.map((poke) => {
			return (
				<div className="pokemon-list-item" key={poke.id}>
					<span className="poke-num">#{poke.num}</span>
					<span className="poke-name">{poke.name}</span>
				</div>
			)
		})
	)
}

class Pokedex extends Component {

	constructor(props) {
      super(props)

      this.state = {
      	pokemon : pokedexData
      }
   }

   componentDidMount() {

   }

   render() {

		return (
			<div className="pokedex">
				<ListContainer>
					{createPokemonListItem(this.state.pokemon)}
				</ListContainer>
			</div>

		)

   }

}

Pokedex.propTypes = {

}

export default Pokedex
