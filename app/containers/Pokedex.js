import React, { PropTypes, Component } from 'react'

/* Redux connect */
import { connect } from 'react-redux'

/* Actions */
import { toggleSelectedPokemon } from '../actions'

/* Import pokemon toast icon */
import PokemonInfoToastComponent from '../components/PokemonInfoToast'

/* Import pokemon info */
import PokemonInfo from '../components/PokemonInfo'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

/* Components */
import PokemonListComponent from '../components/PokemonList'

import PokemonListItemComponent from '../components/PokemonListItem'

/* Utilities */
import classNames from 'classnames'

/* Create markup for each pokemon */
const createPokemonListItem = (pokemon, clickFunc) => {
  return (
		pokemon.map(poke => {
      return (
        <PokemonListItemComponent
          onClick={clickFunc}
          isActive={poke.selected}
          id={poke.id}
          num={poke.num}
          name={poke.name}
          key={poke.id}
    				/>
      )
    })
  )
}


const addSideShiftTransition = children => {
  return (
    <ReactCSSTransitionGroup
      transitionName='shift-fade-right'
      transitionAppear
      transitionEnter
      transitionLeave
      transitionAppearTimeout={300}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
      component='div'>
      {children}
    </ReactCSSTransitionGroup>
  )
}

const createPokemonInfo = (pokemon, onClick) => {
  for (let i = 0, len = pokemon.length; i < len; i++) {
    let poke = pokemon[i]

    if (!poke.selected) continue

    return (
      <ReactCSSTransitionGroup
        transitionName='shift-fade-up'
        transitionAppear
        transitionEnter
        transitionLeave={false}
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        component='div'
        className='pokemoninfo-trans-container'>
        
          <PokemonInfo {...poke} key={i} onClick={onClick} />
        
      </ReactCSSTransitionGroup>
    )
  }
}

class Pokedex extends Component {

  constructor (props) {
    super(props)

    this.clickedPokemonListItem = this.clickedPokemonListItem.bind(this)
    this.clickedPokemon         = this.clickedPokemon.bind(this)
  }

  clickedPokemonListItem (e, id) {
   		this.props.toggleSelectedPokemon(id)
  }

  clickedPokemon(id){
    this.context.router.push(`/pokemondetails/${id}`)
  }

  render () {
    return (
      <div className='pokedex'>
        <div className='pokemon-info-container'>
          {createPokemonInfo(this.props.pokemon, this.clickedPokemon)}
        </div>
        <PokemonListComponent>
          {addSideShiftTransition(createPokemonListItem(this.props.pokemon, this.clickedPokemonListItem))}
        </PokemonListComponent>
      </div>
    )
  }
}

Pokedex.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
   	pokemon : state.pokemon.pokemon
})

export default connect(mapStateToProps, {toggleSelectedPokemon})(Pokedex)
