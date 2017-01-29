import React, { Component } from 'react';
import { fetchMessages } from '../ApiHelper/ApiHelper'
import Message from '../Message/Message'

const MessageList = (props) => {
  return props.messages ? (
    <ul className="MessageList">
      { props.messages.map(message => <Message key={message.id} message={message} />) }
    </ul>
  ) : null;
};

export default MessageList;
