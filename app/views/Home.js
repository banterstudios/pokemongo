import React, { Component, PropTypes } from 'react';

/* Nav bar */
import NavbarContainer from '../containers/Navbar';

/* Pokedex */
import PokedexContainer from '../containers/Pokedex';

class Home extends Component {

   constructor(props) {
      super(props)
   }

   componentDidMount() {
      
      /* Load in the current trainor stats */

      /* Load in the trainor pokemon */

   }

   render() {

		return (

			<section className="home">

            {/* Nav bar */}
            <NavbarContainer 
               name={this.props.navName}
            />
            
            {/* TODO: add in the pokemon list */}
            <PokedexContainer />

			</section>

		)

   }

}

Home.defaultProps = {
   navName : 'Pokedex'
}

Home.propTypes = {
   /* None */
   navName : PropTypes.string
}

export default Home;