import React, { Component } from 'react';
import { fetchMessages } from '../ApiHelper/ApiHelper'
import Message from '../Message/Message'

class MessageList extends Component {
  constructor(props) {
    super(props)

    this.state = { messages: [] }
  }

  componentWillMount() {
    return fetchMessages()
      .then(messages => this.setState({ messages }))
  }

  render() {
    const { messages } = this.state

    return (
      <ul>
        { messages.map(message => <Message key={message.id} message={message} />) }
      </ul>
    )
  }
}

export default MessageList;
