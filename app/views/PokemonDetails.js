import React, { Component, PropTypes } from 'react';

/* Nav bar */
import NavbarContainer from '../containers/Navbar';

/* Import background image component */
import BackgroundImageComponent from '../components/BackGroundImageComponent';

/* Import pokemon toast icon */
import PokemonInfoToastComponent from '../components/PokemonInfoToast';

/* Import pokedex data */
import pokedexData from '../data/pokedexdata';

/* Import the background according to the pokemon */
import * as BG from '../data/pokemonbackdrops';

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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


   componentWillReceiveProps(props){

      /* If the url has changed, check for a new pokemon! */
      this.updatePokemonDetails(props);

   }

   backClicked(){
      this.context.router.push(`/`);
   }

   getPokemonBackdrop(type){

      /* Return the background url based on the pokemon type */
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
               
               {/* Nav bar  */}
               <NavbarContainer 
                  back={true}
                  transparent={true}
                  name={this.props.noPokemonNavName}
                  onBack={this.backClicked}
               />

               <ReactCSSTransitionGroup
                  transitionName="shift-fade-up"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnter={false}
                  transitionLeave={false}>
                     <p className="no-poke-found-text">No pokemon found!</p>
                  </ReactCSSTransitionGroup>
            </section>
         )

      }else{

         let _pokemon     = this.state.pokemon[0],
             _number      = `#${_pokemon.num}`,
             _backdropSrc = this.getPokemonBackdrop(_pokemon.type)

   		return (

   			<section className="pokemon-details">
               
               <ReactCSSTransitionGroup
                  transitionName="center-scale-up"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnter={false}
                  transitionLeave={false} >

                  <BackgroundImageComponent
                     imageSrc={_backdropSrc}
                     classNames="main-bg"
                  />
               </ReactCSSTransitionGroup>

               {/* Nav bar  */}
               <NavbarContainer 
                  back={true}
                  transparent={true}
                  name={_pokemon.name}
                  onBack={this.backClicked}
               />
              
               <ReactCSSTransitionGroup
                  transitionName="shift-fade-up"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnter={false}
                  transitionLeave={false}>
          

                  <div className="pokemon-details-wrapper" key="pokemon-details-wrapper" >
                     {/* Fill component to keep a transparent bg */}
                     <div className="fill"></div>
                     
                     {/* Container for the sliding card */}
                     <div className="pokemon-details-container">
                        
                        {/* Background image of the chosen pokemon */}               
                        <BackgroundImageComponent
                         imageSrc={_pokemon.image}
                         classNames="pokemon-image"
                        />
         
                        {/* Toaster components for name and number of selected pokemon */}
                        <div className="pokemon-basic-info">
                           
                            <PokemonInfoToastComponent
                              name={_number} />

                           <PokemonInfoToastComponent
                              name={_pokemon.name}
                              backgroundColor={_pokemon.color} />

                        </div>

                        {/* Selected pokemon description */}
                        <p className="pokemon-desc">
                           {_pokemon.description}
                        </p>

                     </div>

                  </div>

               </ReactCSSTransitionGroup>

   			</section>

   		)
      }
   }
}

PokemonDetails.defaultProps = {
   noPokemonNavName : 'Oops'
}

PokemonDetails.propTypes = {
   navName : PropTypes.string,
   noPokemonNavName : PropTypes.string
}

PokemonDetails.contextTypes = {
   router : PropTypes.object.isRequired
}

export default PokemonDetails;