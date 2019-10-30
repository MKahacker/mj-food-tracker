import React, { Component } from 'react'
import axios  from 'axios'
import FormCell from './components/form-cell'

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

export default class ServingForm extends Component {
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

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    axios.post('http://localhost:8080/api/ingredients',
      {
        name: 'Test',
        serving: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      })
      .then(function(response){
        console.log(response)
      })
      .catch(function(err) {
        console.log("shit something happend")
        console.log(err)
      })
  }
  
  render() {
    return (
      <div>
        <h1> Enter Serving  </h1>
        <form onSubmit={this.handleSubmit}>
          <FormCell inputName="name" labelText="Name" />
          <FormCell inputName="serving" labelText="Serving Size" />
          <FormCell inputName="fat" labelText="Fat" />
          <FormCell inputName="carbs" labelText="Carbs" />
          <FormCell inputName="protein" labelText="Protein" />
          <input type="submit" value="Submit" style={style.submitStyle} />
        </form>
      </div>
    )
  }
}
