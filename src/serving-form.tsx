import React, { Component } from 'react'
import axios from 'axios'
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
  makeRequest() {
    axios.post('http://localhost:8080/api/ingredients/')
      .then(function(response) {
         console.log(response);
      })
  }

  render() {
    return (
      <div>
        <h1> Enter Serving  </h1>
        <form onSubmit={this.makeRequest}>
          <FormCell labelText="Food:" />
          <FormCell labelText="Weight:" />
          <input type="submit" value="Submit" style={style.submitStyle} />
        </form>
      </div>
    )
  }
}
