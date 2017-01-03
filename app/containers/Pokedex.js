import React, { PropTypes, Component } from 'react';

/* List container */
import ListContainer from './List';

/* Import pokedex data */
import pokedexData from '../data/pokedexdata';

/* Create markup for each pokemon */
const createPokemonListItem = (pokemon, clickFunc) => {
	
	let self = this;

	return (
		pokemon.map((poke) => {
			return (
				<div className="pokemon-list-item" key={poke.id} onClick={(e) => clickFunc(e,poke)}>
					<span className="poke-num">#{poke.num}</span>
					<span className="poke-name">{poke.name}</span>
					<div className="pokeball"></div>
				</div>
			)
		})
	)
}

class Pokedex extends Component {

	constructor(props) {
      super(props)

      /* Bind this */
      this.clickedPokemon = this.clickedPokemon.bind(this);

      this.state = {
      	pokemon : pokedexData
      }
   }

   componentDidMount() {

   }

   clickedPokemon(e, pokedata){
   		window.dev&&console.log('yeehaa')
   		window.dev&&console.log(pokedata)
   }

   render() {

		return (
			<div className="pokedex">
				<ListContainer>
					{createPokemonListItem(this.state.pokemon, this.clickedPokemon)}
				</ListContainer>
			</div>

		)

   }

}

Pokedex.propTypes = {

}

export default Pokedex
