import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import MessageList from './MessageList'
import Message from '../Message/Message'

const message = {id: 'abcd', content: 'fakeContent', author: 'fakeAuthor'}
const messages = [
    message
]

describe('MessageList component', () => {
    it("should render a message list component", () => {
        const props = [{
            id: "1",
            content: "message1Content",
            author: "author"
        }];
        const wrapper = shallow(<MessageList messages={props}/>);
        expect(wrapper.find(".MessageList")).to.have.length(1);
    })

    it('should render 2 messages', () => {
        const props = [{
            id: "1",
            content: "message1Content",
            author: "author"
        }, {
            id: "2",
            content: "message2Content",
            author: "author"
        }];

        const wrapper = shallow(<MessageList messages={props}/>);
        expect(wrapper.find(Message)).to.have.length(2);
    })

    it('should render 1 message with right props', () => {
        const props = [{
            id: "1",
            content: "message1Content",
            author: "author"
        }];

        const wrapper = shallow(<MessageList messages={props}/>);
        expect(wrapper.find(Message).at(0).prop("message")).to.deep.equal({
            id: "1",
            content: "message1Content",
            author: "author"
        });
    })
})
