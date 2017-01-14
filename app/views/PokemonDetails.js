import React, { Component, PropTypes } from 'react'

/* Nav bar */
import NavbarContainer from '../containers/Navbar'

/* Import pokemon toast icon */
import PokemonInfoToastComponent from '../components/PokemonInfoToast'

/* Import spaced card component */
import SpacedCard from '../components/SpacedCard'

/* Redux connect */
import { connect } from 'react-redux'

/* Background Image */
import BackgroundImage from '../containers/BackgroundImageLoader'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class PokemonDetails extends Component {

  constructor (props) {
    super(props)

    this.backClicked = this.backClicked.bind(this)
  }

  backClicked () {
    this.context.router.push(`/`)
  }

  render () {
    let _pokemonArr = this.props.pokemon.filter(poke => {
      return poke.id === parseInt(this.props.routeParams.id) 
    })

    if (!_pokemonArr.length) {
      return (
        <section className='pokemon-details'>

          <NavbarContainer
            back
            transparent
            name={this.props.noPokemonNavName}
            onBack={this.backClicked} />

          <ReactCSSTransitionGroup
            transitionName='shift-fade-up'
            transitionAppear
            transitionAppearTimeout={300}
            transitionEnter={false}
            transitionLeave={false}>
            <p className='no-poke-found-text'>No pokemon found!</p>
          </ReactCSSTransitionGroup>

        </section>
      )
    } else {

      let _pokemon   = _pokemonArr[0],
        _number      = `#${_pokemon.num}`,
        _backdropSrc = _pokemon.bg

   		return (

     <section className='pokemon-details'>

      <ReactCSSTransitionGroup
        transitionName='center-scale-up'
        transitionAppear
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false} >

        <BackgroundImage 
          src={_backdropSrc} 
          className="main-bg" />


      </ReactCSSTransitionGroup>

      <NavbarContainer
        back
        transparent
        name={_pokemon.name}
        onBack={this.backClicked}
      />

      <ReactCSSTransitionGroup
        transitionName='shift-fade-up'
        transitionAppear
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}>

        <SpacedCard>

          <BackgroundImage 
            src={_pokemon.image} 
            className="pokemon-image" />

          <div className='pokemon-basic-info'>

            <PokemonInfoToastComponent
              name={_number} />

            <PokemonInfoToastComponent
              name={_pokemon.name}
              backgroundColor={_pokemon.color} />

          </div>

          <p className='pokemon-desc'>
            {_pokemon.description}
          </p>

        </SpacedCard>

      </ReactCSSTransitionGroup>

      </section>

   		)
    }
  }
}

PokemonDetails.defaultProps = {
  noPokemonNavName: 'Oops'
}

PokemonDetails.propTypes = {
  navName: PropTypes.string,
  noPokemonNavName: PropTypes.string
}

PokemonDetails.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  pokemon: state.pokemon.pokemon
})

export default connect(mapStateToProps)(PokemonDetails)
