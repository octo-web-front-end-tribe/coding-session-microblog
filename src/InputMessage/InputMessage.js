import React, { Component } from 'react';
import { container, input } from './InputMessage.css'

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
      <div className={ container }>
        <input
          className={ input }
          value={ this.state.inputValue }
          onChange={ (event) => this.onChange(event) }
          onKeyPress={ (event) => this.onEnter(event) }
        />
      </div>
    )
  }
}

InputMessage.propTypes = {
  poster: React.PropTypes.func.isRequired
}

export default InputMessage;
