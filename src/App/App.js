import React from 'react'
import MessageList from '../MessageList/MessageList'
import InputMessage from '../InputMessage/InputMessage'
import { fetchMessages, postMessage } from '../ApiHelper/ApiHelper'
import { container, messageBox } from './App.css'

const App = () => (
  <div className={container}>
    <div className={messageBox}>
      <InputMessage poster={postMessage} />
      <MessageList fetcher={fetchMessages} />
    </div>
  </div>
)

export default App
