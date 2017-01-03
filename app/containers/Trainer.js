import React, { Component, PropTypes } from 'react';

/* Import trainer profile image component */
import ImageComponent from '../components/Image';

/* Import level component for the trainer */
import LevelComponent from '../components/LevelText';

/* Trainer type */
import TrainerType from '../components/TrainerType';

/* Temp */

/* Trainer image */
import trainerImgSrc from '../assets/trainer.png';

/* /Temp */

class Trainer extends Component {

   constructor(props) {
      super(props)

      /* Set the initial state */
      this.state = {
         profileImgAlt : 'this is a cool photo',
         profileImgSrc : '',
         profileLevel  : 1,
         profileType   : 'mystic'
      }

   }

   componentDidMount(){

      /*    
         Set the image and src for the trainer profile image
         according to what id is passed in.
      */

      if(window.dev){
         
         this.setState({
            profileImgSrc : trainerImgSrc,
         })

      }else{

         /* Todo */

      }

   }

   render() {

   		return (

   			<div className="trainer">

               {/* Trainer type */}
               <TrainerType
                  type = { this.state.profileType }
               />

               {/* Trainer main image */}
               <ImageComponent    
                  imgAlt = { this.state.profileImgAlt }
                  imgSrc = { this.state.profileImgSrc } 
                  imgClasses = "trainer-image" />

               {/* Trainer Level */}
               <LevelComponent
                  level = { this.state.profileLevel }
               />
              

   			</div>

   		)
   }

}

Trainer.PropTypes = {

   trainerId : PropTypes.string.isRequired,

}

export default Trainer