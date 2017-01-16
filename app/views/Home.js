import React, { Component, PropTypes } from 'react'

/* Nav bar */
import NavbarContainer from '../containers/Navbar'

/* Main Menu */
import MainMenuContainer from '../containers/Menu'

/* Pokedex */
import PokedexContainer from '../containers/Pokedex'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Home extends Component {

  constructor (props) {
    super(props)

    this.state = {
      menuOpen: false
    }

    this.onBurgerClick = this.onBurgerClick.bind(this)
    this.renderMenuContainer = this.renderMenuContainer.bind(this)
  }

  componentDidMount () {

  }

  onBurgerClick (isMenuOpen) {
    this.setState({
      menuOpen: isMenuOpen
    })
  }

  renderMenuContainer () {
    if (this.state.menuOpen) {
      return (
        <MainMenuContainer />
      )
    } else {
      return null
    }
  }

  render () {
    return (

      <section className='home'>

        <NavbarContainer
          name={this.props.navName}
          onBurgerClick={this.onBurgerClick}
          onBurgerMenuToggle={this.onBurgerClick} />

        <PokedexContainer />

        <ReactCSSTransitionGroup
          transitionName='shift-fade-left'
          transitionEnter
          transitionLeave
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300} >
          {this.renderMenuContainer()}
        </ReactCSSTransitionGroup>

      </section>

    )
  }

}

Home.defaultProps = {
  navName: 'Pokedex'
}

Home.propTypes = {
   /* None */
  navName: PropTypes.string
}

export default Home
