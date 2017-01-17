import React, { PropTypes, Component } from 'react'

/* Get Image */
import getImage from '../utils/getImage'

/* 
*	@name - BackgroundImageLoader
*	@description - Will take a image src and wait for it to loader and show a placeholder
*   @usage - <BackgroundImage src={source} placeholder={localImage} {...other attributes}>
*       {...child components}
*       </BackgroundImage>
*	@todo - Have a fade animation for when the image has loaded in.
*/

class BackgroundImageLoader extends Component {
	constructor(props){
		super(props)

		this.state = {
			loaded : false,
			error  : false
		}

		this.handleImgLoad = this.handleImgLoad.bind(this);
    	this.handleImgError = this.handleImgError.bind(this);
	}

	handleImgLoad(){
		this.setState({
      		loaded : true,
    	});
	}

	handleImgError(){
		this.setState({
      		loaded : false,
      		error  : true
    	});
	}

	componentDidMount(){

		getImage(this.props.src)
		.then( this.handleImgLoad )
		.catch( this.handleImgError )

	}

	shouldComponentUpdate(nextState, nextProps) {
		return !this.state.loaded;
	}

	render(){
		const { src, placeholder, children, ...props } = this.props;
	    const source = !this.state.loaded || this.state.error ? placeholder : src;

	    return (
	      <div style={{backgroundImage: `url(${source})`}} {...props}>
	        {children}
	      </div>
	    )
	}
}

BackgroundImageLoader.defaultProps = {
	placeholder : ''
}

BackgroundImageLoader.propTypes = {
	src         : PropTypes.string.isRequired,
	placeholder : PropTypes.string,
	className   : PropTypes.string,
	style       : PropTypes.object,
	children    : PropTypes.object
}

export default BackgroundImageLoader