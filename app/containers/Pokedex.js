import React, { PropTypes, Component } from 'react';

/* List container */
import ListContainer from './List';

/* Create markup for each pokemon */
const createPokemonListItem = (children) => {
	return (
		React.Children.map(children, (child, index) => {
			return (
				<div className="pokemon-list-item" key={index}>
					
				</div>
			)
		})
	)
}

class Pokedex extends Component {

	constructor(props) {
      super(props)
   }

   componentDidMount() {

   }

   render() {

		return (
			<div className="pokedex">
				<ListContainer>

				</ListContainer>
			</div>

		)

   }

}

Pokedex.propTypes = {

}

export default Pokedex
