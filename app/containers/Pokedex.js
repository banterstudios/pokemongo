import React, { PropTypes, Component } from 'react';

/* List container */
import ListContainer from './List';

/* Import pokedex data */
import pokedexData from '../data/pokedexdata';

/* Import background image component */
import BackgroundImageComponent from '../components/BackGroundImageComponent';

/* Import pokemon toast icon */
import PokemonInfoToastComponent from '../components/PokemonInfoToast';

/* Create markup for each pokemon */
const createPokemonListItem = (pokemon, clickFunc) => {

	return (
		pokemon.map( poke => {
		
			let _pokeBallClasses = poke.selected ? 'pokeball active' : 'pokeball';

			return (
				<div className="pokemon-list-item" key={poke.id} onClick={(e) => clickFunc(e,poke)}>
					<span className="poke-num">#{poke.num}</span>
					<span className="poke-name">{poke.name}</span>
					<div className={_pokeBallClasses}></div>
				</div>
			)
		})
	)
}

const createPokemonInfo = (pokemon) => {
	
	return (
		
		pokemon.map(poke => {

			let _classNames = poke.selected ? 'pokemon-info' : 'pokemon-info hidden',
				_number     = `#${poke.num}`

			return (

				<div className={_classNames} key={poke.id}>
					<BackgroundImageComponent
						imageSrc={poke.image}
					/>
					<PokemonInfoToastComponent
						name={poke.name}
						backgroundColor={poke.color} />

					<PokemonInfoToastComponent
						name={_number} />

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
 	
 		/*
			toggle the current selected pokemon and deselect all other pokemon
 		*/
   		this.setState(prevState => ({
   			pokemon : prevState.pokemon.map(poke => {
   				if(poke.id === pokedata.id){
   					poke.selected = !poke.selected
   				}else{
   					poke.selected = false
   				}

   				return poke
   			})
   		}))
   }

   render() {

		return (
			<div className="pokedex">
				<div className="pokemon-info-container">
					{createPokemonInfo(this.state.pokemon)}
				</div>
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
