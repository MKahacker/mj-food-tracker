import React, { Component } from 'react'
import FormCell from '../components/form-cell'
import '../style/meal-form.scss'

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
        <div className="addIngredient">Add Ingredient</div>
        <form>
          <input type="submit" value="Submit" className="submitBtn" />
        </form>
      </div>
    )
  }
}
