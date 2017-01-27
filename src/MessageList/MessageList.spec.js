import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import MessageList from './MessageList'
import Message from '../Message/Message'

const message = { id: 'abcd', content: 'fakeContent', author: 'fakeAuthor' }
const fetcherMock = () => Promise.resolve([message])

describe('MessageList component', () => {
  describe('on first render', () => {
    it('should return a response with the expected messages', (done) => {
      const wrapper = shallow(<MessageList fetcher={fetcherMock} />)

      setTimeout(() => {
        expect(wrapper.contains(<Message message={message} />)).to.be.true
        done()
      }, 10)
    })
  })
})
