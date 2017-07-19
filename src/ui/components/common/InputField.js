import React, { Component } from 'react'
import {
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'

class InputField extends Component {
  state = {
    value: ''
  }

  render() {
    let { type, name, label } = this.props
    let { value } = this.state

    return (
      <FormGroup>
        <ControlLabel>{ label }</ControlLabel>
        <FormControl
            type={ type }
            name={ name }
            value={ value }
            onChange={ this.handleChange } />
      </FormGroup>
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