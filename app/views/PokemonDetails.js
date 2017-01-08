import React, { Component, PropTypes } from 'react';

/* Nav bar */
import NavbarContainer from '../containers/Navbar';

/* Import background image component */
import BackgroundImageComponent from '../components/BackGroundImageComponent';

/* Import pokemon toast icon */
import PokemonInfoToastComponent from '../components/PokemonInfoToast';

/* Redux connect */
import { connect } from 'react-redux';

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class PokemonDetails extends Component {

   constructor(props) {
      super(props)

      /* Bind this */
      this.backClicked          = this.backClicked.bind(this)
   }

   backClicked(){
      this.context.router.push(`/`);
   }

   render() {

      let _pokemonArr = this.props.pokemon.filter(poke => poke.id === parseInt(this.props.routeParams.id));

      if(!_pokemonArr.length){

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

            let _pokemon     = _pokemonArr[0],
                _number      = `#${_pokemon.num}`,
                _backdropSrc  = _pokemon.bg

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
          
                  <div className="spaced-card-wrapper" key="pokemon-details-wrapper" >
                     
                     <div className="fill"></div>
                     
                     <div className="spaced-card-container">
                                      
                        <BackgroundImageComponent
                         imageSrc={_pokemon.image}
                         classNames="pokemon-image"
                        />
         
                        <div className="pokemon-basic-info">
                           
                           <PokemonInfoToastComponent
                              name={_number} />

                           <PokemonInfoToastComponent
                              name={_pokemon.name}
                              backgroundColor={_pokemon.color} />

                        </div>

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

const mapStateToProps = (state, props) => ({
   pokemon : state.pokemon.pokemon
})

export default connect(mapStateToProps)(PokemonDetails)
