import React, { Component } from 'react'
import request from 'request'
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
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    request('http://localhost:8080/api/ingredients', function (error, response, body) {
      if (error != null) {
        console.error('error:', error); // Print the error if one occurred
      }
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  }
  render() {
    axios.get('https://google.com')
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
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
