import React, { PropTypes, Component } from 'react'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

/* Components */
import MenuListComponent from '../components/MenuList'

import MenuItemComponent from '../components/MenuItem'

class Menu extends Component {

  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (name = '') {
    let _redirect = '/'

    switch (name) {

      case 'Pokedex':
        _redirect = '/'
        break

      case 'About':
        _redirect = 'about'
        break

    }

    this.context.router.push(_redirect)
  }

  render () {
    return (
      <div className='main-menu'>
        <MenuListComponent>
          <MenuItemComponent name='Pokedex' onClick={() => { this.handleClick('Pokedex') }} />
          <MenuItemComponent name='About' onClick={() => { this.handleClick('About') }} />
        </MenuListComponent>
      </div>
    )
  }
}

Menu.contextTypes = {
  router : PropTypes.object.isRequired
}

export default Menu
