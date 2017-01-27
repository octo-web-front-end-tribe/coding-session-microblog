import React from 'react'
import MessageList from '../MessageList/MessageList'
import InputMessage from '../InputMessage/InputMessage'
import { fetchMessages, postMessage } from '../ApiHelper/ApiHelper'

const App = () => (
  <div>
    <MessageList fetcher={fetchMessages} />
    <InputMessage poster={postMessage} />
  </div>
)

export default App
