import React, { Component } from 'react';
import MessageList from '../MessageList/MessageList';
import InputMessage from '../InputMessage/InputMessage';
import { fetchMessages } from '../ApiHelper/ApiHelper'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { messages: [] }
    }

    componentWillMount() {
        return this.refreshMessages();
    }

    refreshMessages() {
        return fetchMessages()
            .then(messages => this.setState({ messages }))
    }

    render() {
        console.log("RENDER APP")
        return (
            <div>
                <MessageList messages={this.state.messages} />
                <InputMessage onSubmit={() => this.refreshMessages()}/>
            </div>
        )
    }
}

export default App;
