import React, { Component } from 'react';
import ApiHelper from '../ApiHelper/ApiHelper'

class InputMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {inputValue: ''}
  }

  onEnter({ key }) {
    if (key === 'Enter') {
      return ApiHelper.postMessage({
        author:'enDur',
        content: this.state.inputValue
      }).then(() => {
        this.props.onSubmit()
        this.setState({inputValue: ''})
      })
    }
  }

  onChange({target: {value}}) {
    this.setState({inputValue: value})
  }

  render() {
    return (
      <input
        value={ this.state.inputValue }
        onChange={ (event) => this.onChange(event) }
        onKeyPress={ (event) => this.onEnter(event) }
      />
    )
  }
}

export default InputMessage;
