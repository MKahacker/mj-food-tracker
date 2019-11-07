import React, { Component } from 'react'
import FormCell from '../components/form-cell'

export default class MealForm extends Component {
  render() {
    const cssClass = 'meal-form'
    return (
      <div>
        <h1> Create Meal</h1>
        <form>
          <FormCell
            labelText="Name"
            inputName="meal"
          />
        </form>
      </div>
    )
  }
}
