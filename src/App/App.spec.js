import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from './App'
import MessageList from '../MessageList/MessageList'

describe('App component', () => {
  it('should display Hello world', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<MessageList />)).to.be.true
  })
})
