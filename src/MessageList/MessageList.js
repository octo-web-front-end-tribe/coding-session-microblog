import React, { Component } from 'react';
import Message from '../Message/Message'
import { container } from './MessageList.css'

class MessageList extends Component {
  constructor(props) {
    super(props)

    this.state = { messages: [] }
  }

  componentWillMount() {
    return this.props.fetcher()
      .then(messages => this.setState({ messages }))
  }

  render() {
    const { messages } = this.state

    return (
      <ul className={ container }>
        { messages.map(message => <Message key={message.id} message={message} />) }
      </ul>
    )
  }
}

MessageList.propTypes = {
  fetcher: React.PropTypes.func.isRequired
}

export default MessageList;
