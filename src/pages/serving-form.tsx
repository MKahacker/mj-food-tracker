import React, { Component } from 'react'
import axios  from 'axios'
import FormCell from '../components/form-cell'

const style = {
  submitStyle: {
    width: '55%',
    height: '30px',
    marginTop: '20px',
    color: '#fff',
    background: '#282c34',
    borderColor: '#fff',
    borderRadius: 20,
    borderWidth: 1
  }
};

interface ServingState {
  name: String,
  serving: Number,
  fat: Number,
  carbs: Number,
  protein: Number
}

export default class ServingForm extends Component<{}, ServingState> {
  constructor() {
    super({})
    this.state = {
      name: '',
      serving: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }

  getName = () => this.state.name
  getServing = () => this.state.serving
  getFat = () => this.state.fat
  getCarbs = () => this.state.carbs
  getProtein = () => this.state.protein

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    axios.post('http://localhost:8080/api/ingredients',
      {
        name: this.getName(),
        serving: this.getServing(),
        fat: this.getFat(),
        carbs: this.getCarbs(),
        protein: this.getProtein()
      })
      .then(function(response){
        console.log(response)
      })
      .catch(function(err) {
        console.log("shit something happend")
        console.log(err)
      })
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    this.setState<never>({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1> Enter Serving  </h1>
        <form onSubmit={this.handleSubmit}>
          <FormCell
            inputName="name"
            labelText="Name"
            onChange={this.handleInputChange}
          />
          <FormCell
            inputName="serving"
            labelText="Serving Size"
            onChange={this.handleInputChange}
          />
          <FormCell
            inputName="fat"
            labelText="Fat"
            onChange={this.handleInputChange}
          />
          <FormCell
            inputName="carbs"
            labelText="Carbs"
            onChange={this.handleInputChange}
          />
          <FormCell
            inputName="protein"
            labelText="Protein"
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Submit" style={style.submitStyle} />
        </form>
      </div>
    )
  }
}
