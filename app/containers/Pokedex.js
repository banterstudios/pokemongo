import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

/* Redux connect */
import { connect } from 'react-redux'

/* Actions */
import { toggleSelectedPokemon } from '../actions'

/* Import pokemon toast icon */
import PokemonInfoToastComponent from '../components/PokemonInfoToast'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

/* Components */
import PokemonListComponent from '../components/PokemonList'

import PokemonListItemComponent from '../components/PokemonListItem'

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

const addShiftTransition = children => {
  return (
    <ReactCSSTransitionGroup
      transitionName='shift-fade-up'
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

const createPokemonInfo = pokemon => {
  for (let i = 0, len = pokemon.length; i < len; i++) {
    let poke = pokemon[i]

    if (!poke.selected) continue

    let _classNames = poke.selected ? 'pokemon-info' : 'pokemon-info hidden',
      _number = `#${poke.num}`,
      _link = `/pokemondetails/${poke.id}`

    return (

      <div className={_classNames} key={poke.id}>
        <Link to={_link} >

          {addShiftTransition(
            <div className="poke-info-bg-image" style={{backgroundImage:`url('${poke.image}')`}} />
          )}

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

  constructor (props) {
    super(props)

    this.clickedPokemon = this.clickedPokemon.bind(this)
  }

  clickedPokemon (e, id) {
   		this.props.toggleSelectedPokemon(id)
  }

  render () {
    return (
      <div className='pokedex'>
        <div className='pokemon-info-container'>
          {createPokemonInfo(this.props.pokemon)}
        </div>
        <PokemonListComponent>
          {addSideShiftTransition(createPokemonListItem(this.props.pokemon, this.clickedPokemon))}
        </PokemonListComponent>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
   	pokemon : state.pokemon.pokemon
})

export default connect(mapStateToProps, {toggleSelectedPokemon})(Pokedex)
