import React, { Component } from 'react'
import FormCell from './components/form-cell'

export default class ServingForm extends Component {
  render() {
    return (
      <div>
        <h1> Enter Serving  </h1>
        <form>
          <FormCell labelText="Food:"/>
          <FormCell labelText="Weight:"/>
        </form>
      </div>
    )
  }
}
