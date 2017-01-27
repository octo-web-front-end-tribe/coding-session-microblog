import React, { Component } from 'react';

class InputMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {inputValue: ''}
  }

  onEnter({ key }) {
    if (key === 'Enter') {
      this.props.poster({
        author:'enDur',
        content: this.state.inputValue
      })
      this.setState({inputValue: ''})
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

InputMessage.propTypes = {
  poster: React.PropTypes.func.isRequired
}

export default InputMessage;
