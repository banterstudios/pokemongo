import React, { PropTypes, Component } from 'react'

/* 
*	@name - BackgroundImageLoader
*	@description - Will take a image src and wait for it to loader and show a placeholder
*   @usage - <BackgroundImage img={source} placeholder={localImage} {...other attributes}>
        {...child components}
       </BackgroundImage>
*
*/

class BackgroundImageLoader extends Component {
	constructor(props){
		super(props)

		this.state = {
			loaded : false,
			error  : false
		}
	}

	componentDidMount(){

	}

	componentWillUnmount(){

	}

	render(){
		return(
			<div style={{backgroundImage: `url(${source})`}} {...props}>
				{children}
			</div>
		)
	}
}

export default BackgroundImageLoader