import dom from '../utils/dom'

import { assert } from 'chai'

import AboutView from '../../app/views/About'

import TestUtils from 'react-addons-test-utils'

describe('About view component', () => {
	
	before('render and locate view component', () =>{
		
		let renderedComponent = TestUtils.renderIntoDocument(
			<AboutView/>
		);

		var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
	      renderedComponent,
	      'section'
	    );

		this.aboutViewDOM = inputComponent.getDOMNode()

	    it('about view should be a section tag', () => {
			assert(this.aboutViewDOM.getTagName() === 'section')
		})

	})

})
