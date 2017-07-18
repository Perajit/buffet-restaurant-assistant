import React, { Component } from 'react'

class InputField extends Component {
  state = {
    value: ''
  }

  render() {
    let { type, name, label } = this.props
    let { value } = this.state

    return (
      <div>
        <label>{ label }</label>
        <input
            type={ type }
            name={ name }
            value={ value }
            onChange={ this.handleChange } />
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    let { value } = nextProps

    if (value === undefined) {
      value = ''
    }

    this.setState({ value })
  }

  handleChange = (e) => {
    let { onChangeValue } = this.props
    let value = e.target.value

    onChangeValue(value)
  }
}

export default InputField