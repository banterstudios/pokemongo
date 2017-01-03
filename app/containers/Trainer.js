import React, { Component, PropTypes } from 'react';

/* Import trainer profile image component */
import TrainerProfileImageComponent from '../components/TrainerProfileImage';
import TrainerStatesComponent from '../components/TrainerStats';

class Trainer extends Component {

   constructor(props) {
      super(props)

      /* Set the initial state */
      this.state = {
         profileImgAlt : '',
         profileImgSrc : ''
      }

   }

   componentDidMount(){

      /*    
         Set the image and src for the trainer profile image
         according to what id is passed in.
      */

      if(window.dev){
         
         this.setState({

            profileImgAlt : 'this is a cool photo',

            /* This is not finding the asset */
            profileImgSrc : '../assets/022 - i0w85Sz.png',

         })

      }else{

         /* Todo */

      }

   }

   render() {

   		return (

   			<div className="trainer">

               {/* trainer main image */}
               <TrainerProfileImageComponent    
                  profileImgAlt = { this.state.profileImgAlt }
                  profileImgSrc = { this.state.profileImgSrc } />

               {/* trainer stats */}
               {/* TODO: add in the props */}
               <TrainerStatesComponent />

   			</div>

   		)
   }

}

Trainer.PropTypes = {

   trainerId : PropTypes.string.isRequired,

}

export default Trainer