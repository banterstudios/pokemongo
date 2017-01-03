import React, { Component, PropTypes } from 'react';

/* Nav bar */
import NavbarContainer from '../containers/Navbar';

/* Import background image component */
import BackgroundImageComponent from '../components/BackGroundImageComponent';

/* Import pokedex data */
import pokedexData from '../data/pokedexdata';

/* Import the background according to the pokemon */
import * as BG from '../data/pokemonbackdrops';

class PokemonDetails extends Component {

   constructor(props) {
      super(props)

      /* Bind this */
      this.backClicked          = this.backClicked.bind(this)
      this.updatePokemonDetails = this.updatePokemonDetails.bind(this)
      this.getPokemonBackdrop   = this.getPokemonBackdrop.bind(this)

      //  Set the default state
      this.state = {
         pokemon : []
      }

   }

   componentWillMount(){

      /* Check for the pokemon to display */
      this.updatePokemonDetails();

   }

   updatePokemonDetails(props = this.props){

      let _self    = this,
          _pokemon = pokedexData.filter(poke => poke.id === parseInt(props.routeParams.id))

      this.setState({
         pokemon : _pokemon
      })

   }

   componentDidMount() {

   }

   componentWillReceiveProps(props){

      /* If the url has changed, check for a new pokemon! */
      this.updatePokemonDetails(props);

   }

   backClicked(){

   }

   getPokemonBackdrop(type){

      return (type === 'poision' || type === 'bug')
            ? BG.LEAF 
            : type === 'water'
            ? BG.WATER 
            : BG.FIRE

   }

   render() {

      if(!this.state.pokemon.length){

         return (
            <section className="pokemon-details">
               No pokemon found!
            </section>
         )

      }else{

         let _backdropSrc = this.getPokemonBackdrop(this.state.pokemon[0].type)

   		return (

   			<section className="pokemon-details">

               <BackgroundImageComponent
                  imageSrc={_backdropSrc}
                  classNames="main-bg"
               />

               {/* Nav bar */}
               <NavbarContainer 
                  back={true}
                  transparent={true}
                  onBack={this.backClicked}
               />

               <div className="pokemon-details-container">

               </div>

   			</section>

   		)
      }
   }
}

PokemonDetails.propTypes = {
   /* None */
   navName : PropTypes.string
}

PokemonDetails.contextTypes = {
   router : PropTypes.object.isRequired
}

export default PokemonDetails;