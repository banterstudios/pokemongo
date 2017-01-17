"use strict"

import React from 'react'

import { expect } from 'chai'

import { shallow, mount, render } from 'enzyme'

import AboutView from '../../app/views/About'


describe('<AboutView />', () => {
	
	let wrapper

	beforeEach( () => {
		wrapper = shallow(<AboutView />)
	});

	it('<AboutView /> should exist', () => {
		expect(wrapper).to.exist
	})

	it('it should have a class named about', () => {
		expect(wrapper.is('.about')).to.equal(true)
	})

	it('it should be of DOM type section', () => {
		expect(wrapper.is('section')).to.equal(true)
	})

	it('it should have two direct children', () => {
		expect(wrapper.children().length).to.equal(2)
	})

})