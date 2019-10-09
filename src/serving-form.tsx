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
  // handleSubmit = () => {
  //   var xhr = new XMLHttpRequest()
  //   xhr.addEventListener('load', () => {
  //     console.log(xhr.responseText)
  //   })
  //
  //   xhr.open('GET', 'https://google.com')
  //   xhr.send()
  // }

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
        <form>
          <FormCell labelText="Food:" />
          <FormCell labelText="Weight:" />
          <input type="submit" value="Submit" style={style.submitStyle} />
        </form>
      </div>
    )
  }
}
