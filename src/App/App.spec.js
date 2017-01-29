import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import fetchMock from 'fetch-mock'
const sinon = require("sinon");

import App from './App'
import MessageList from '../MessageList/MessageList'
import InputMessage from '../InputMessage/InputMessage'
const apiHelper = require("../ApiHelper/ApiHelper");


const message = {id: 'abcd', content: 'fakeContent', author: 'fakeAuthor'}
const messages = [
    message
]

describe('App component', () => {
    before(() => (
        sinon.stub(apiHelper, "fetchMessages")
    ))

    after(() => {
        apiHelper.fetchMessages.restore();
    })

    describe('On componentWillMount', () => {
        it('should set a new list of messages from fetch response', (done) => {
            apiHelper.fetchMessages.returns(Promise.resolve(messages))
            const wrapper = shallow(<App />)

            setTimeout(() => {
                expect(apiHelper.fetchMessages.callCount).to.equal(1)
                expect(wrapper.state().messages).to.equal(messages)
                done()
            }, 10)
        })
    })

    describe('On refreshMessages', () => {
        it('should set a new list of messages from fetch response', () => {
            apiHelper.fetchMessages.returns(Promise.resolve(messages))

            const wrapper = shallow(<App />)

            apiHelper.fetchMessages.reset();

            return wrapper.instance().refreshMessages()
                .then(() => {
                    expect(apiHelper.fetchMessages.callCount).to.equal(1)
                    expect(wrapper.state().messages).to.equal(messages)
                })
        })
    })

    describe('On render', () => {
        it('should render MessageList', () => {
            const wrapper = shallow(<App />)
            expect(wrapper.find(MessageList)).to.have.length(1)
        })

        it('should render InputMessage', () => {
            const wrapper = shallow(<App />)
            expect(wrapper.find(InputMessage)).to.have.length(1)
        })
    })
})
