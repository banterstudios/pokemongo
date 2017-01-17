import React, { Component, PropTypes } from 'react'

/* Nav bar */
import NavbarContainer from '../containers/Navbar'

/* Transitions */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class About extends Component {

  constructor (props) {
    super(props)

    this.backClicked = this.backClicked.bind(this)
  }

  backClicked () {
   	 this.context.router.push(`/`)
  }

  render () {
   	return (
     <section className='about'>

       <NavbarContainer
         back
         transparent
         name={this.props.navName}
         onBack={this.backClicked}
				/>

       <ReactCSSTransitionGroup
         transitionName='shift-fade-up'
         transitionAppear
         transitionAppearTimeout={300}
         transitionEnter={false}
         transitionLeave={false}>
         <div className='about-text-wrapper'>
           <p className='about-text'>
							Created by Nick de Rozarieux
						</p>

           <p className='about-text'>
							View the code on <a href='https://github.com/banterstudios/pokemongo' target='_blank'>github.com/banterstudios</a>
           </p>

         </div>
       </ReactCSSTransitionGroup>

     </section>
   	)
  }

}

About.contextTypes = {
  router: PropTypes.object.isRequired
}

About.defaultProps = {
  navName: 'About'
}

About.propTypes = {
  navName: PropTypes.string
}

export default About
