import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from './App'
import MessageList from '../MessageList/MessageList'
import InputMessage from '../InputMessage/InputMessage'

describe('App component', () => {
  it('should render MessageList', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsMatchingElement(<MessageList />)).to.be.true
  })

  it('should render InputMessage', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsMatchingElement(<InputMessage />)).to.be.true
  })
})
