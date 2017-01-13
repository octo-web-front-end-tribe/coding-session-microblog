import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import MessageList from './MessageList'
import Message from '../Message/Message'

const message = { id: 'abcd', content: 'fakeContent', author: 'fakeAuthor' }
const messages = [
  message
]

describe('MessageList component', () => {
  describe('on first render', () => {
    before(() => (
      fetchMock.get('https://skool-microblog.herokuapp.com/messages', messages)
    ))

    after(fetchMock.reset)

    it('should return a response with the expected messages', (done) => {
      const wrapper = shallow(<MessageList />)

      setTimeout(function() {
        expect(fetchMock.calls().matched).to.have.length(1)
        expect(wrapper.contains(<Message message={message} />)).to.be.true
        done()
      }, 10)
    })
  })
})
