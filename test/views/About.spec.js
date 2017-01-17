"use strict"

import React from 'react'

import { expect } from 'chai'

import { shallow, mount, render } from 'enzyme'

import sinon from 'sinon'

import AboutView from '../../app/views/About'

/* Child components */
import NavbarContainer from '../../app/containers/Navbar'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

describe('<AboutView />', () => {
	
	let wrapper

	beforeEach( () => {
		wrapper = mount(<AboutView />)
	});

	it('<AboutView /> should exist', () => {
		expect(wrapper).to.exist
	})

	it('it should have a class named about', () => {
		expect(wrapper.hasClass('about')).to.equal(true)
	})

	it('it should be of DOM type section', () => {
		expect(wrapper.getDOMNode().tagName).to.equal('SECTION')
	})

	it('should have a default props of navName', () => {
		expect(wrapper.props().navName).to.equal('About')
	})

	it('it should have two direct children', () => {
		expect(wrapper.children().length).to.equal(2)
	})

	it('first child should be of type <NavbarContainer />', () => {
		const child = wrapper.childAt(0)
		expect(child.type()).to.equal(NavbarContainer)
	})

	it('last child should be of type <ReactCSSTransitionGroup />', () => {
		const child = wrapper.childAt(1)
		expect(child.type()).to.equal(ReactCSSTransitionGroup)
	})

	it('about-text-wrapper should behave correctly', () => {
		const aboutTextWrapper = wrapper.find('.about-text-wrapper')
		expect(aboutTextWrapper).to.have.length(1)
		expect(aboutTextWrapper.is('div')).to.equal(true)
		expect(aboutTextWrapper.children()).to.have.length(2)
	})

	it('about-text-wrapper children should behave correctly', () => {
		const childOne = wrapper.find('.about-text-wrapper').childAt(0)
		const childTwo = wrapper.find('.about-text-wrapper').childAt(1)
		
		expect(childOne.is('p')).to.equal(true)
		expect(childOne.is('.about-text')).to.equal(true)
		expect(childOne.text()).to.equal('Created by Nick de Rozarieux')

		expect(childTwo.is('p')).to.equal(true)
		expect(childTwo.is('.about-text')).to.equal(true)
		expect(childTwo.text()).to.equal(`View the code on github.com/banterstudios`)
	})
})
