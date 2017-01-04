import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

/* List container */
import ListContainer from './List';

/* Import pokedex data */
import pokedexData from '../data/pokedexdata';

/* Import background image component */
import BackgroundImageComponent from '../components/BackGroundImageComponent';

/* Import pokemon toast icon */
import PokemonInfoToastComponent from '../components/PokemonInfoToast';

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Create markup for each pokemon */
const createPokemonListItem = (pokemon, clickFunc) => {

	return (
		pokemon.map( poke => {
		
			let _pokeBallClasses = poke.selected ? 'pokeball active' : 'pokeball';
				
			return (

				<div className="pokemon-list-item" key={poke.id} onClick={e => clickFunc(e,poke)}>
					<span className="poke-num">#{poke.num}</span>
					<span className="poke-name">{poke.name}</span>
					<div className={_pokeBallClasses}></div>
				</div>

			)
		})
	)
}

const addShiftTransition = children => {
	return (
		<ReactCSSTransitionGroup
	      transitionName="shift-fade-up"
	      transitionAppear={true}
	      transitionEnter={true}
	      transitionLeave={true}
	      transitionAppearTimeout={300}
	      transitionEnterTimeout={300}
		  transitionLeaveTimeout={300}
		  component="div">
		  {children}
		</ReactCSSTransitionGroup>
	)
}

const addSideShiftTransition = children => {
	return (
		<ReactCSSTransitionGroup
	      transitionName="shift-fade-right"
	      transitionAppear={true}
	      transitionEnter={true}
	      transitionLeave={true}
	      transitionAppearTimeout={300}
	      transitionEnterTimeout={300}
		  transitionLeaveTimeout={300}
		  component="div">
		  {children}
		</ReactCSSTransitionGroup>
	)
}

const createPokemonInfo = pokemon => {
	
	for(let i = 0, len = pokemon.length; i < len; i ++){
		
		let poke = pokemon[i]

		if(!poke.selected)continue

		let _classNames = poke.selected ? 'pokemon-info' : 'pokemon-info hidden',
			_number     = `#${poke.num}`,
			_link       = `/pokemondetails/${poke.id}`

		return (

			<div className={_classNames} key={poke.id}>
				<Link to={_link} >
					
					{addShiftTransition(<BackgroundImageComponent imageSrc={poke.image} />)}
					
					{addShiftTransition(<PokemonInfoToastComponent
							name={poke.name}
							backgroundColor={poke.color} />
					)}
					
					{addShiftTransition(<PokemonInfoToastComponent
							name={_number} />
					)}

				</Link>
			</div>
		)
	}
}

class Pokedex extends Component {

	constructor(props) {
      super(props)

      /* Bind this */
      this.clickedPokemon     = this.clickedPokemon.bind(this);
 
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
					{addSideShiftTransition(createPokemonListItem(this.state.pokemon, this.clickedPokemon))}
				</ListContainer>
			</div>

		)

   }

}


export default Pokedex
