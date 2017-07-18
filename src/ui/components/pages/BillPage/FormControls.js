import React, { Component } from 'react'

class FormControls extends Component {
  render() {
    let {
      onReset,
      onSubmit
    } = this.props

    return (
      <div>
        <button
            onClick={ onReset }>Reset</button>
        <button
            onClick={ onSubmit }>Calculate</button>
      </div>
    )
  }
}

export default FormControls