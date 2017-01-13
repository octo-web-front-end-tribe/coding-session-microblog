import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Message from './Message'

const message = { id: 'abcd', content: 'fakeContent', author: 'fakeAuthor' }

describe('Message component', () => {
  describe('on render', () => {
    it('should return a response with the expected messages', () => {
      const wrapper = shallow(<Message message={message} />)

      expect(wrapper.contains(<li>fakeContent</li>)).to.be.true
    })
  })
})
